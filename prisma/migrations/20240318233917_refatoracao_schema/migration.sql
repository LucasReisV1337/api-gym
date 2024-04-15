/*
  Warnings:

  - You are about to drop the `Training` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Training";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Trainning" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Trainning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT,
    "restTime" INTEGER,
    "weight" INTEGER,
    "repetitions" INTEGER,
    "series" INTEGER,
    "trainingId" TEXT NOT NULL,
    CONSTRAINT "Exercise_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Trainning" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Exercise" ("category", "description", "id", "name", "repetitions", "restTime", "series", "trainingId", "weight") SELECT "category", "description", "id", "name", "repetitions", "restTime", "series", "trainingId", "weight" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
