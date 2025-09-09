-- CreateEnum
CREATE TYPE "public"."Roles" AS ENUM ('User', 'Customer');

-- CreateEnum
CREATE TYPE "public"."Listing_Type" AS ENUM ('ForSale', 'ForRent');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "public"."Roles" NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT DEFAULT 'default-avatar.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Likes" (
    "id" SERIAL NOT NULL,
    "like" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "accomadtionId" TEXT NOT NULL,

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accomadtionId" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Accomadation" (
    "id" TEXT NOT NULL,
    "house_img" TEXT,
    "featured" BOOLEAN NOT NULL,
    "listing_type" "public"."Listing_Type" NOT NULL,
    "title" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "total_price" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "categoryId" INTEGER,

    CONSTRAINT "Accomadation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Rating" (
    "id" SERIAL NOT NULL,
    "clean" DOUBLE PRECISION NOT NULL,
    "location" DOUBLE PRECISION NOT NULL,
    "communicate" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "accomadtionId" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "icon_img" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Likes" ADD CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Likes" ADD CONSTRAINT "Likes_accomadtionId_fkey" FOREIGN KEY ("accomadtionId") REFERENCES "public"."Accomadation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_accomadtionId_fkey" FOREIGN KEY ("accomadtionId") REFERENCES "public"."Accomadation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accomadation" ADD CONSTRAINT "Accomadation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accomadation" ADD CONSTRAINT "Accomadation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_accomadtionId_fkey" FOREIGN KEY ("accomadtionId") REFERENCES "public"."Accomadation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
