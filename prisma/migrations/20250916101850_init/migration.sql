-- CreateTable
CREATE TABLE "public"."MainContact" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "MainContact_pkey" PRIMARY KEY ("id")
);
