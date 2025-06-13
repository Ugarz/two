import { z } from 'zod'

/**
 * Zod schema for a single CV experience entry.
 */
export const cvExperienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  start: z.string(),
  end: z.string(),
  description: z.string(),
})

/**
 * Zod schema for the full CV (array of experiences).
 */
export const cvSchema = z.array(cvExperienceSchema)

export type CvExperience = z.infer<typeof cvExperienceSchema>
export type Cv = z.infer<typeof cvSchema>
