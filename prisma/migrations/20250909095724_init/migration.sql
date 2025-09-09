/*
  Warnings:

  - Made the column `categoryId` on table `Accomadation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Accomadation" DROP CONSTRAINT "Accomadation_categoryId_fkey";

-- AlterTable
ALTER TABLE "public"."Accomadation" ALTER COLUMN "categoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Accomadation" ADD CONSTRAINT "Accomadation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
