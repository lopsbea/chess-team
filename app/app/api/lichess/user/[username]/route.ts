import { NextResponse } from "next/server";

const LICHESS_BASE = "https://lichess.org";

type User = {
  id: string;
  perfs: {
    bullet?: { rating: number };
    blitz?: { rating: number };
    rapid?: { rating: number };
    puzzle?: { rating: number };
  };
}

export async function getPlayer(username: string): Promise<User> {
  const res = await fetch(`https://lichess.org/api/user/${username}`, {
    headers: {
      "Accept": "application/json",
    },
    // cache: "no-store" // usar isso se quiser sempre dados atualizados
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscar ${username}`);
  }
  return res.json();
}