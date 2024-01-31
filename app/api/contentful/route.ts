import { createClient } from "contentful";

export function contentfulApiGQL(query: string) {
	const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/651dpynyx4bt`;

	const fetchOptions = {
		method: "POST",
		headers: {
			Authorization: `Bearer aMDd0h_eopxu33mCbUFzzC2WcLg9JKX9ZbzswND_5gc`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ query })
	};
	async function fetchGraphQL() {
		try {
			const data = await fetch(fetchUrl, fetchOptions).then((response) =>
				response.json()
			);
			return data;
		} catch (error) {
			throw new Error("Could not fetch data from Contentful!");
		}
	}
	return fetchGraphQL;
}

export async function getEntry(id: string) {
	const client = createClient({
		space: "651dpynyx4bt",
		environment: "master",
		accessToken: "aMDd0h_eopxu33mCbUFzzC2WcLg9JKX9ZbzswND_5gc"
	});

	return client
		.getEntry(id)
		.then((entry) => {
			return entry;
		})
		.catch(console.error);
}
