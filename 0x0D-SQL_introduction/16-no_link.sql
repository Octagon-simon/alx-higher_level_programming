-- list records with a name value, and descending order (score)
SELECT score, name FROM second_table WHERE name IS NOT NULL ORDER BY score DESC;
