// Custom implementation of allCoreContent to avoid DYNAMIC_SERVER_USAGE error
export function customCoreContent(content) {
  return {
    ...content,
    body: undefined,
    _raw: undefined,
    _id: undefined
  }
}

export function customAllCoreContent(contents: any[]) {
  return contents.map((c) => customCoreContent(c)).filter((c) => !("draft" in c && c.draft === true))
}
