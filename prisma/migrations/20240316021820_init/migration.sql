/*
  Warnings:

  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Trainning` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cpf` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exercise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "restTime" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "repetitions" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "trainningId" TEXT NOT NULL,
    CONSTRAINT "Exercise_trainningId_fkey" FOREIGN KEY ("trainningId") REFERENCES "Trainning" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Exercise" ("category", "description", "id", "name", "repetitions", "restTime", "series", "trainningId", "weight") SELECT "category", "description", "id", "name", "repetitions", "restTime", "series", "trainningId", "weight" FROM "Exercise";
DROP TABLE "Exercise";
ALTER TABLE "new_Exercise" RENAME TO "Exercise";
CREATE TABLE "new_Trainning" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Trainning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Trainning" ("id", "isActive", "name", "userId") SELECT "id", "isActive", "name", "userId" FROM "Trainning";
DROP TABLE "Trainning";
ALTER TABLE "new_Trainning" RENAME TO "Trainning";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nickname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "nickname", "password") SELECT "email", "emailVerified", "id", "nickname", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
