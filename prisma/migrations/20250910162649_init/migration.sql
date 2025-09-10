/*
  Warnings:

  - You are about to drop the column `accomadtionId` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `accomadtionId` on the `Likes` table. All the data in the column will be lost.
  - You are about to drop the column `accomadtionId` on the `Rating` table. All the data in the column will be lost.
  - You are about to drop the `Accomadation` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accommodationId` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accommodationId` to the `Likes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accommodationId` to the `Rating` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ListingType" AS ENUM ('RENT', 'SALE', 'EXCHANGE');

-- DropForeignKey
ALTER TABLE "public"."Accomadation" DROP CONSTRAINT "Accomadation_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Accomadation" DROP CONSTRAINT "Accomadation_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Contact" DROP CONSTRAINT "Contact_accomadtionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Likes" DROP CONSTRAINT "Likes_accomadtionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Rating" DROP CONSTRAINT "Rating_accomadtionId_fkey";

-- AlterTable
ALTER TABLE "public"."Contact" DROP COLUMN "accomadtionId",
ADD COLUMN     "accommodationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Likes" DROP COLUMN "accomadtionId",
ADD COLUMN     "accommodationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Rating" DROP COLUMN "accomadtionId",
ADD COLUMN     "accommodationId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Accomadation";

-- DropEnum
DROP TYPE "public"."Listing_Type";

-- CreateTable
CREATE TABLE "public"."Accommodation" (
    "id" TEXT NOT NULL,
    "img" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "listing_type" "public"."ListingType" NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT,
    "features" JSONB,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION,
    "build_year" BIGINT,
    "description" TEXT,
    "documents" JSONB,
    "map_url" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "country" TEXT,
    "extra_features" BIGINT,
    "user_id" TEXT NOT NULL,
    "category_id" INTEGER,

    CONSTRAINT "Accommodation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Likes" ADD CONSTRAINT "Likes_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
