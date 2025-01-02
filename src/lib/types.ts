import { array, boolean, object, optional, string, type InferOutput } from 'valibot';

export const BoardSchema = object({
	name: string(),
	categories: array(
		object({
			name: string(),
			questions: array(
				object({
					question: string(),
					answer: string(),
					available: optional(boolean(), true)
				})
			)
		})
	)
});

export type Board = InferOutput<typeof BoardSchema>;
export type Category = Board['categories'][0];
export type Question = Category['questions'][0];
