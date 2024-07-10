/*
  Warnings:

  - The primary key for the `person` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "person" DROP CONSTRAINT "person_pkey",
ALTER COLUMN "person_id" SET DATA TYPE TEXT,
ALTER COLUMN "genre" SET DATA TYPE CHAR,
ADD CONSTRAINT "person_pkey" PRIMARY KEY ("person_id");

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("user_id");
