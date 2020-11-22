const checkUpdatedOptions = ( newSelectedVariants: string[], lastUpdate: string[] ): boolean => {
  return (newSelectedVariants.length === 0)
    || (newSelectedVariants.length === lastUpdate.length
      && newSelectedVariants.every( ( el: string ) => {
        return lastUpdate.includes( el );
      } ));
}

export default checkUpdatedOptions;