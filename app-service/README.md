# Flyway Demo Application

## Flyway

Flyway is an open-source tool, licensed under Apache License 2.0, 
that helps you implement automated and version-based database migrations. 
It allows you to define the required update operations in an SQL script or as Java code. 
You can then run the migration from a command line client or automatically as part of 
your build process or integrated into your Java application.

## Application Description

The application is a basic **spring-data-rest** project. It contains only 1 table, i.e. Users, which
is created, filled, modified and updated using script V1__init.sql, V2__testdata.sql, 
V3__modification.sql & V4__updatetestdata.sql respectively.

The updates are versioned and immutable once applied. Flyway system maintains a table where it keeps
record of 
