<script lang="ts" context="module">
	import GitHubService from "../../services/github";

	export async function preload({ query }) {
		const pageParam = parseInt(query["page"] as string) || 1;
    const perPageParam = parseInt(query["per_page"] as string) || 10;
		const issues = await GitHubService.getIssues(pageParam, perPageParam);

    const repo = await GitHubService.getRepo();
    const openIssueCount = repo.open_issues_count;
    const totalPage = Math.ceil(openIssueCount / perPageParam);

		return {
			pageParam,
			perPageParam,
			totalPage,
			issues,
		};
	}
</script>

<script lang="ts">
	import type { Issue } from "../../services/github";
	import Pagination from "../../components/Pagination.svelte"

	export let pageParam: number;
	export let perPageParam: number;
	export let totalPage: number;
	export let issues: Issue[];
</script>

<svelte:head>
	<title>Issues</title>
</svelte:head>

<table class="table">
	<thead>
		<th>issue番号</th>
		<th>タイトル</th>
	</thead>
	<tbody>
		{#each issues as issue}
			<tr>
				<th>
					<a href="/issues/{issue.number}">#{issue.number}</a>
				</th>
				<td>{issue.title}</td>
			</tr>
		{/each}
	</tbody>
</table>
<Pagination
	currentPage={pageParam}
	totalPage={totalPage}
	perPage={perPageParam}
	path={'issues'}
	paramNamePage={'page'}
	paramNamePerPage={'per_page'}
/>