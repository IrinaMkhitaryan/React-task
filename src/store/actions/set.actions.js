
/**
 *
 * =================================================
 *                  SET USER DATA
 * =================================================
 * @param store {$ObjMap}
 * @param data {object}
 *
 */
export const setUserData = (store, user) => {
    store.setState({ user: user });
};