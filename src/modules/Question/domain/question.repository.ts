import { IRepository } from "src/common/domain/repository/IRepository";
import { Question } from "../domain/question.model";

export type createQuestionProps = Omit<
  Question,
  "id" | "createdAt" | "updatedAt"
>;

export interface IQuestionRepository extends IRepository<Question, Question> {
  findByCategory(category: string): Promise<Question[]>;
}
