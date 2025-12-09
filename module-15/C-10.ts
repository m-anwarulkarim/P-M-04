/**
 * ============================================================
 * Relationship Cardinality & ER Diagram Example
 * ============================================================
 *
 * Relationship Cardinality কি?
 * -----------------------------
 * Cardinality হলো দুটি entity-এর মধ্যে সম্পর্ক কতভাবে হতে পারে তা বোঝায়।
 *
 * Cardinality-এর প্রধান ধরনগুলো:
 *
 * 1️⃣ One-to-One (1:1)
 * -------------------
 * প্রতিটি entity একটিমাত্র সম্পর্কিত entity-এর সঙ্গে যুক্ত।
 * উদাহরণ: এক শিক্ষক এক Principal-এর সঙ্গে যুক্ত।
 *
 *      Teacher 1 ─── 1 Principal
 *
 *
 * 2️⃣ One-to-Many (1:N)
 * --------------------
 * একটি entity অনেকগুলো entity-এর সঙ্গে সম্পর্কিত হতে পারে,
 * কিন্তু অন্য entity শুধু একটিই।
 * উদাহরণ: একজন Teacher অনেক Students পড়ায়,
 * কিন্তু প্রতিটি Student এক Teacher-এর অধীনে থাকে।
 *
 *      Teacher 1 ─── N Student
 *
 *
 * 3️⃣ Many-to-One (N:1)
 * ---------------------
 * উপরের One-to-Many-এর বিপরীত।
 * উদাহরণ: অনেক Students এক Classroom-এ আছে।
 *
 *      Student N ─── 1 Classroom
 *
 *
 * 4️⃣ Many-to-Many (M:N)
 * ---------------------
 * দুই entity একাধিক সম্পর্ক রাখতে পারে।
 * উদাহরণ: Student অনেক Courses নিতে পারে,
 * Course-ও অনেক Students নিতে পারে।
 *
 *      Student M ─── N Course
 *
 *
 * ============================================================
 * ER Diagram Representation
 * ============================================================
 *
 * 1️⃣ One-to-One (1:1)
 * -------------------
 * +---------+        +-----------+
 * | Country | 1    1| President |
 * +---------+        +-----------+
 * | country_id (PK) | | pres_id (PK) |   // (PK) মানে Primary Key।
 * | name            | | name         |
 * +-----------------+ +-------------+
 *
 * => এক দেশ শুধু এক রাষ্ট্রপতি রাখে, এক রাষ্ট্রপতি শুধু এক দেশে।
 *
 *
 * 2️⃣ One-to-Many (1:N)
 * --------------------
 * +---------+        +---------+
 * | Teacher | 1    * | Course  |
 * +---------+        +---------+
 * | teacher_id (PK) | | course_id (PK) |
 * | name            | | course_name    |
 * +-----------------+ +----------------+
 *
 * => একজন Teacher অনেক Course পড়াতে পারে।
 *
 *
 * 3️⃣ Many-to-One (N:1)
 * --------------------
 * +---------+        +---------+
 * | Student | *    1 | Course  |
 * +---------+        +---------+
 * | student_id (PK) | | course_id (PK) |
 * | name            | | course_name    |
 * +-----------------+ +----------------+
 *
 * => অনেক Student একই Course-এ ভর্তি হতে পারে।
 *
 *
 * 4️⃣ Many-to-Many (M:N)
 * ---------------------
 * +---------+        +-------------+        +---------+
 * | Student | *    * | Enrollment  | *    1 | Course  |
 * +---------+        +-------------+        +---------+
 * | student_id (PK) | | enrollment_id(PK)| | course_id (PK) |
 * | name            | | student_id (FK)  | | course_name    |
 * +-----------------+ | course_id (FK)   | +----------------+
 *                     +-----------------+
 *
 * => অনেক Student অনেক Course-এ ভর্তি হতে পারে।
 * Tip: M:N relationship RDBMS-এ Join Table / Bridge Table (Enrollment) ব্যবহার করে তৈরি করা হয়।
 */
