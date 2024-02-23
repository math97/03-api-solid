import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInsRepository {
  // we didn't use the checkInCreateInput because it creates the relations instead of use some already created
  findByUserIdOnDate(userId: string, date: Date): Promise<CheckIn | null>
  findManyByUserId(userId: string, page: number): Promise<CheckIn[]>
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
}
