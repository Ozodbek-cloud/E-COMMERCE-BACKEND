/*
  Warnings:

  - The `img` column on the `Accommodation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `documents` column on the `Accommodation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Accommodation" DROP COLUMN "img",
ADD COLUMN     "img" TEXT[],
DROP COLUMN "documents",
ADD COLUMN     "documents" TEXT[];
