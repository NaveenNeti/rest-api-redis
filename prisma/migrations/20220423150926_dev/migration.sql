-- CreateTable
CREATE TABLE "Audit" (
    "id" TEXT NOT NULL,
    "dateCreated" BIGINT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Audit_pkey" PRIMARY KEY ("id")
);
