import { Entity } from '@/core/entities/types/entity'
import { UniqueEntityId } from '@/core/entities/types/unique-entity-id'

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityId) {
    const student = new Student(
      {
        ...props,
      },
      id,
    )
    return student
  }
}
