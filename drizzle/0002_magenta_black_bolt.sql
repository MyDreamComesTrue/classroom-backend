ALTER TABLE "user" DROP CONSTRAINT "user_email_unique";--> statement-breakpoint
ALTER TABLE "classes" ALTER COLUMN "capacity" SET NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX "user_email_unique" ON "user" USING btree (lower("email"));--> statement-breakpoint
ALTER TABLE "classes" ADD CONSTRAINT "classes_capacity_positive_check" CHECK ("classes"."capacity" > 0);