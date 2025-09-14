-- DropForeignKey
ALTER TABLE "public"."Accommodation" DROP CONSTRAINT "Accommodation_category_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Accommodation" DROP CONSTRAINT "Accommodation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Contact" DROP CONSTRAINT "Contact_accommodationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Contact" DROP CONSTRAINT "Contact_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Likes" DROP CONSTRAINT "Likes_accommodationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Likes" DROP CONSTRAINT "Likes_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Rating" DROP CONSTRAINT "Rating_accommodationId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Rating" DROP CONSTRAINT "Rating_userId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Likes" ADD CONSTRAINT "Likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Likes" ADD CONSTRAINT "Likes_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Contact" ADD CONSTRAINT "Contact_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Accommodation" ADD CONSTRAINT "Accommodation_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Rating" ADD CONSTRAINT "Rating_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "public"."Accommodation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
