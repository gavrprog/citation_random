/*
  Warnings:

  - You are about to drop the `Visitor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Visitor";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "visitor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "new" INTEGER NOT NULL,
    "old" INTEGER NOT NULL
);
