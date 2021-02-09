<script lang="ts" context="module">
	import GitHubService from "../../services/github";

	export async function preload({ params }) {
		const issue = await GitHubService.getIssue(params.issueNumber);
		return { issue };
	}
</script>

<script lang="ts">
	import type { Issue } from "../../services/github";
	import marked from "marked";
	import DOMPurify from "dompurify";

	export let issue: Issue;

	function markdownToHtml(markdown: string): string {
		return DOMPurify.sanitize(marked(markdown));
	}
</script>

<svelte:head>
	<title>Issue #{issue.number} {issue.title}</title>
</svelte:head>

<div class="card">
	<header class="card-header">
		<p class="card-header-title">#{issue.number} {issue.title}</p>
	</header>
	<div class="card-content">
		<div class="content">{@html markdownToHtml(issue.body)}</div>
	</div>
	<footer class="card-footer">
		<a class="card-footer-item" href="javascript:history.back()">戻る</a>
	</footer>
</div>