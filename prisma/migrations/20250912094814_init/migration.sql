-- CreateEnum
CREATE TYPE "public"."Roles" AS ENUM ('User', 'Customer');

-- CreateEnum
CREATE TYPE "public"."ListingType" AS ENUM ('RENT', 'SALE', 'EXCHANGE');

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
    "accommodationId" TEXT NOT NULL,

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
    "accommodationId" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Accommodation" (
    "id" TEXT NOT NULL,
    "img" JSONB,
    "house_img" TEXT,
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

-- CreateTable
CREATE TABLE "public"."Rating" (
    "id" SERIAL NOT NULL,
    "clean" DOUBLE PRECISION NOT NULL,
    "location" DOUBLE PRECISION NOT NULL,
    "communicate" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,

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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Likes" ADD CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Likes" ADD CONSTRAINT "Likes_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
