import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// « Thèse » est un type de document, pas un thème : la valeur `th` disparaît des thèmes.
// Les publications qui l'utilisaient passent en « Soins primaires & télérequérant » (à revoir dans le BO).
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   UPDATE "publications" SET "theme" = 'sp' WHERE "theme" = 'th';
  UPDATE "_publications_v" SET "version_theme" = 'sp' WHERE "version_theme" = 'th';
  ALTER TABLE "publications" ALTER COLUMN "theme" SET DATA TYPE text;
  DROP TYPE "public"."enum_publications_theme";
  CREATE TYPE "public"."enum_publications_theme" AS ENUM('prev', 'sp', 'dmc', 'mob', 'crise');
  ALTER TABLE "publications" ALTER COLUMN "theme" SET DATA TYPE "public"."enum_publications_theme" USING "theme"::"public"."enum_publications_theme";
  ALTER TABLE "_publications_v" ALTER COLUMN "version_theme" SET DATA TYPE text;
  DROP TYPE "public"."enum__publications_v_version_theme";
  CREATE TYPE "public"."enum__publications_v_version_theme" AS ENUM('prev', 'sp', 'dmc', 'mob', 'crise');
  ALTER TABLE "_publications_v" ALTER COLUMN "version_theme" SET DATA TYPE "public"."enum__publications_v_version_theme" USING "version_theme"::"public"."enum__publications_v_version_theme";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "publications" ALTER COLUMN "theme" SET DATA TYPE text;
  DROP TYPE "public"."enum_publications_theme";
  CREATE TYPE "public"."enum_publications_theme" AS ENUM('prev', 'sp', 'dmc', 'mob', 'crise', 'th');
  ALTER TABLE "publications" ALTER COLUMN "theme" SET DATA TYPE "public"."enum_publications_theme" USING "theme"::"public"."enum_publications_theme";
  ALTER TABLE "_publications_v" ALTER COLUMN "version_theme" SET DATA TYPE text;
  DROP TYPE "public"."enum__publications_v_version_theme";
  CREATE TYPE "public"."enum__publications_v_version_theme" AS ENUM('prev', 'sp', 'dmc', 'mob', 'crise', 'th');
  ALTER TABLE "_publications_v" ALTER COLUMN "version_theme" SET DATA TYPE "public"."enum__publications_v_version_theme" USING "version_theme"::"public"."enum__publications_v_version_theme";`)
}
