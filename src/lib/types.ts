import { array, object, string, type InferOutput } from 'valibot';

export const BoardSchema = object({
	name: string(),
	categories: array(
		object({
			name: string(),
			questions: array(
				object({
					question: string(),
					answer: string()
				})
			)
		})
	)
});

export type Board = InferOutput<typeof BoardSchema>;
export type Category = Board['categories'][0];
export type Question = Category['questions'][0];
