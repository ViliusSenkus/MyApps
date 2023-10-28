# ToDo

- sukurti application scope subkategorijų lentelę :

      SCOPE: SUBSCOPE
      * sklypas/teritorija: žemės darbai, apželdinimas, laistymas....
      * pamatai: konstrukcija, apšiltinimas ...
      * sienos: -//-
      * stogas: -//-
      * įvadai/inžinerija: vandentiekis, kanalizacija, elektra, šildymas, vėdinimas, apsauga?
      * apdaila: pagal kambarius ir vietą (siena, laiptai, grindys, lubos)

- fronte, prie pirkimo pridėti visų vienu kartu įsigytų produktų / paslaugų sąrašą:
      - pridėti langą kuriame matysis visi sukrauti pirkiniai
      - pridėti mygtukus (pridėti produktą, pridėti paslaugą)
      - naujo produkto/paslaugos įvedimo laukelyje teikti automatizuotus pasiųlymus filtruojant jau esamus produktus arba siūlyti sukurti naują.
# Notes on DB

- produktai susieti su building_phases elementais 'apdaila', papildomai gali būti susieti ir su 'inžinerija' arba 'galutinė apdaila' elementais.


# <i>Personall note</i>

## Roll Back & Migrate Using A Single Command:

The <code>migrate:refresh</code> command will roll back all of your migrations and then execute the migrate command. This command effectively re-creates your entire database:

## Merging migrations:

It is possible to merge multiple migrations for one table into one migration file, but it requires some <em>careful</em> steps to avoid losing information. Here is one possible way to do it:

- Consolidate all the migration files for the table into one file that contains the final schema of the table. You can use the Schema facade to create and modify columns, indexes, and foreign keys.
- Rename the original table to something else, such as <code>old_table_name</code>, using the rename method of the Schema facade.
- Run the consolidated migration file to create a new table with the same name as before, but with the final schema.
- Copy the data from the old table to the new table using the DB facade or a raw SQL query.
- Drop the old table using the drop method of the Schema facade.
- Delete all the old migration files and records from the migrations table, except for the consolidated one.

Alternatively, you can use a package like Laravel Migrations Merger that automates this process for you. However, you should <strong style="color:red">always backup your database before performing any migration operations.</strong>