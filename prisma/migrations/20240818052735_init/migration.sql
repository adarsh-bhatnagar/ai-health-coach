-- CreateTable
CREATE TABLE "Assistant" (
    "id" SERIAL NOT NULL,
    "assistantId" TEXT NOT NULL,

    CONSTRAINT "Assistant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userThread" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "threadId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userThread_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Assistant_assistantId_key" ON "Assistant"("assistantId");

-- CreateIndex
CREATE UNIQUE INDEX "userThread_userId_key" ON "userThread"("userId");
