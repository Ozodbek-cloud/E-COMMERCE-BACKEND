/*
  Warnings:

  - Made the column `category_id` on table `Accommodation` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Accommodation" DROP CONSTRAINT "Accommodation_category_id_fkey";

-- AlterTable
ALTER TABLE "public"."Accommodation" ALTER COLUMN "category_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
