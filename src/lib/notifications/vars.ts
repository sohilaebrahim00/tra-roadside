/** First name only, per notification copy spec — "Hi John" not "Hi John Alan Smith". */
export function firstNameOf(fullName: string): string {
  return fullName.trim().split(/\s+/)[0] || fullName;
}
