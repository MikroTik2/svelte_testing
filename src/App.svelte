<script lang="ts">
    import { Router, Route } from 'svelte-routing';

    import Layout from '@/routes/+layout.svelte';
    import Page from '@/routes/+page.svelte';
    import Error from '@/routes/+error.svelte';
</script>

<main>
    <Router>
        <Layout>
            <Route path="/" component={Page} />
            <Route path="*" component={Error} />
        </Layout>
    </Router>
</main>