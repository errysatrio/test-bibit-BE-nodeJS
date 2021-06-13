`
TEMP (
    select (name, id) from USERS 
) b
select * from USERS a left join a.parent ON  a.parent = b.id
`