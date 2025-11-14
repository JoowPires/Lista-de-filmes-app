-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WatchlistMovie" (
    "id" TEXT NOT NULL,
    "tmdbId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "WatchlistMovie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "WatchlistMovie_userId_tmdbId_idx" ON "WatchlistMovie"("userId", "tmdbId");

-- AddForeignKey
ALTER TABLE "WatchlistMovie" ADD CONSTRAINT "WatchlistMovie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
