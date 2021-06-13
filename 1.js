`SELECT
a.id id,
a.UserName UserName,
(
    SELECT
        UserName
    FROM
        users
    WHERE
        users.id = a.Parent) Parent
FROM
    users a
;
'