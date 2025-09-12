/*
  Warnings:

  - You are about to alter the column `build_year` on the `Accommodation` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `extra_features` on the `Accommodation` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "public"."Accommodation" ALTER COLUMN "build_year" SET DATA TYPE INTEGER,
ALTER COLUMN "extra_features" SET DATA TYPE INTEGER;
