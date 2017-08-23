create table exercise (
    id serial primary key,
    category varchar(200),
    title varchar(200),
    unique (category, title)
);

create table exercise_fact (
exercise_id serial primary key,
dt timestamp default now(),
count int,
weight int
);

