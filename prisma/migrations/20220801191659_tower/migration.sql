/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Tower" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "tower_height" REAL,
    "frequency" REAL,
    "resistance" REAL,
    "skin_depth" REAL,
    "temperature_effect" REAL,
    "spacing_between_bundled_conductors" REAL,
    "spacing_between_conductors" REAL,
    "current_carrying_capacity" REAL,
    "inductance_of_transmission_lines" REAL,
    "capacitance" REAL,
    "capacitive_reactance" REAL,
    "conductor_type" TEXT,
    "conductor_length" REAL,
    "conductor_cross_sectional_area" REAL,
    "span" REAL,
    "commulative_line_loading" REAL,
    "cable_configuration" TEXT,
    "power_transmitted_in_MVA" REAL,
    "power_received_at_load_in_MVA" REAL,
    "efficiency" REAL,
    "sending_end_voltage_in_KV" REAL,
    "receiving_end_voltage_in_KV" REAL,
    "voltage_regulation" REAL,
    "corona_losses" REAL,
    "line_type" TEXT
);
