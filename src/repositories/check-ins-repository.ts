import { CheckIn, Prisma } from '@prisma/client'

export interface CheckInsRepository {
  // we didn't use the checkInCreateInput because it creates the relations instead of use some already created
  create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
}
