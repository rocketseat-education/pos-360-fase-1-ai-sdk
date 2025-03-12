import { github } from "@/lib/octokit"
import { tool } from "ai"
import { setTimeout } from "timers/promises"
import { z } from "zod"

export const githubProfile = tool({
  description: 'Essa ferramenta serve para buscar do perfil de um usuário do GitHub ou acessar URLs da API para outras informações de um usuário como lista de organizações, repositórios, eventos, seguidores, seguindo, etc...',
  parameters: z.object({
    username: z.string().describe('Username do usuário no GitHub'),
  }),
  execute: async ({ username }) => {
    await setTimeout(2000)

    const response = await github.users.getByUsername({ username })

    return response.data
  }
})