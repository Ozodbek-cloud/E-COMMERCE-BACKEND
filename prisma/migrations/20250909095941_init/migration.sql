/*
  Warnings:

  - The `house_img` column on the `Accomadation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Accomadation" DROP COLUMN "house_img",
ADD COLUMN     "house_img" JSONB;
