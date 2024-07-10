// utils/id.util.ts
import SnowflakeId from 'snowflake-id';

const snowflake = new SnowflakeId({
  mid: 42, // ID de la máquina
  offset: ( Number((new Date().getFullYear)) - 1970) * 31536000 * 1000, // Offset de tiempo (en este caso, 2020)
});

export function generateSnowflakeId(): string {
  return snowflake.generate().toString();
}

export function isSnowflakeId(id: string): boolean {
  if (id.length !== 18) {
    return false;
  }

  const num = BigInt(id);
  return num.toString() === id;
}
