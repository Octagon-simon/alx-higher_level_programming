-- convert a database to UTF8
OCALTER DATABASE hbtn_0c_0 CONVERT TO CHARACTER SET utf8mb4 COLLATE  utf8mb4_unicode_ci;
ALTER TABLE hbtn_0c_0.first_table CONVERT TO CHARACTER SET utf8mb4 COLLATE  utf8mb4_unicode_ci;
ALTER TABLE hbtn_0c_0.first_table MODIFY name CONVERT TO CHARACTER SET utf8mb4 COLLATE  utf8mb4_unicod\
e_ci;
