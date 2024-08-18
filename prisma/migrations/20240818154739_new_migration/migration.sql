-- CreateTable
CREATE TABLE "ChallengePreferences" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "sendNotifications" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ChallengePreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMeta" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "endpoint" TEXT NOT NULL,
    "p256dh" TEXT NOT NULL,
    "auth" TEXT NOT NULL,

    CONSTRAINT "UserMeta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChallengePreferences_userId_key" ON "ChallengePreferences"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMeta_userId_key" ON "UserMeta"("userId");
