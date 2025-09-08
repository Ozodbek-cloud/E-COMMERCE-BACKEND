/*
  Warnings:

  - A unique constraint covering the columns `[propertyId]` on the table `Accomadation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Accomadation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Accomadation" ADD COLUMN     "attachment" TEXT,
ADD COLUMN     "barbeque" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "baths" INTEGER,
ADD COLUMN     "beds" INTEGER,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "doorman" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "dryer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "energyClass" TEXT,
ADD COLUMN     "energyIndex" DOUBLE PRECISION,
ADD COLUMN     "featuredImage" TEXT,
ADD COLUMN     "fireplace" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "friendlyAddress" TEXT,
ADD COLUMN     "gallery" TEXT[],
ADD COLUMN     "garages" INTEGER,
ADD COLUMN     "homeAreaSqft" DOUBLE PRECISION,
ADD COLUMN     "label" TEXT,
ADD COLUMN     "lotAreaSqft" DOUBLE PRECISION,
ADD COLUMN     "lotDimensions" TEXT,
ADD COLUMN     "material" TEXT,
ADD COLUMN     "microwave" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "outdoorShower" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "parentProperty" TEXT,
ADD COLUMN     "parking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "petsAllowed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "priceCustom" TEXT,
ADD COLUMN     "pricePrefix" TEXT,
ADD COLUMN     "priceSuffix" TEXT,
ADD COLUMN     "propertyId" TEXT,
ADD COLUMN     "region" TEXT,
ADD COLUMN     "rooms" INTEGER,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "videoLink" TEXT,
ADD COLUMN     "virtualTour" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Accomadation_propertyId_key" ON "public"."Accomadation"("propertyId");
