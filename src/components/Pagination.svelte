<script lang="ts">
  export let currentPage: number;
  export let totalPage: number;
  export let perPage: number;
  export let path: string;
  export let paramNamePage: string;
  export let paramNamePerPage: string;
  export let displayPageCount: number = 3;

	const range = (from: number, to: number) => [...Array(to - from)].map((_, i) => from + i);

	function computeVisiblePageNumbers() {
		let from = currentPage - displayPageCount;
		if (from < 2) from = 2;
		let to = currentPage + displayPageCount;
		if (to > totalPage - 1) to = totalPage - 1;
		return range(from, to);
	}
	function computeHasEllipsisFrom() {
		return currentPage - displayPageCount >= 3;
	}
	function computeHasEllipsisTo() {
		return currentPage + displayPageCount <= totalPage - 2;
	}
	$: visiblePageNumbers = computeVisiblePageNumbers();
	$: hasEllipsisFrom = computeHasEllipsisFrom();
	$: hasEllipsisTo = computeHasEllipsisTo();

	function generatePaginationHref(page: number): string {
		return `${path}?${paramNamePage}=${page}&${paramNamePerPage}=${perPage}`;
	}
</script>

<nav class="pagination">
	<ul class="pagination-list">
		<li>
			<a class="pagination-link" href={ generatePaginationHref(currentPage - 1) }>
				&lt;
			</a>
		</li>
		<li>
			<a class="pagination-link { currentPage === 1 ? 'is-current' : ''}" href={ generatePaginationHref(1) }>
				1
			</a>
		</li>
		{#if hasEllipsisFrom}
			<li>
				<span class="pagination-ellipsis">&hellip;</span>
			</li>
		{/if}
		{#each [...visiblePageNumbers] as visiblePageNumber}
			<li>
				<a class="pagination-link { currentPage === visiblePageNumber ? 'is-current' : ''}" href={ generatePaginationHref(visiblePageNumber) }>
					{visiblePageNumber}
				</a>
			</li>
		{/each}
		{#if hasEllipsisTo}
			<li>
				<span class="pagination-ellipsis">&hellip;</span>
			</li>
		{/if}
		<li>
			<a class="pagination-link { currentPage === totalPage ? 'is-current' : '' }" href={ generatePaginationHref(totalPage) }>
				{totalPage}
			</a>
		</li>
		<li>
			<a class="pagination-link" href={ generatePaginationHref(currentPage + 1) }>
				&gt;
			</a>
		</li>
	</ul>
</nav>