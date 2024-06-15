import { PaginationParams } from '@/core/entities/repositories/pagination-params'
import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>
  findManyByAnswerId(
    answerId: string,
    params: PaginationParams,
  ): Promise<AnswerComment[]>
  create(comment: AnswerComment): Promise<void>
  delete(comment: AnswerComment): Promise<void>
  // save(comment: AnswerComment): Promise<void>
}
