import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const styles = StyleSheet.create({
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 12
  },
  avatarLarge: {
    width: 104,
    height: 104,
    borderRadius: 52,
    marginBottom: 16
  },
  banner: {
    minHeight: 180,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 22,
    marginBottom: 26
  },
  bannerText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 16
  },
  bodyText: {
    color: colors.textMuted,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22
  },
  button: {
    minHeight: 52,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
    paddingHorizontal: 18
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '800'
  },
  cardText: {
    flex: 1
  },
  cardTitle: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: '800'
  },
  cartRow: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.border
  },
  cartCheckButton: {
    paddingRight: 2
  },
  cartControlsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14
  },
  cartItemCard: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 12,
    padding: 14
  },
  cartItemTopRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12
  },
  cartToolbar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  chip: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24
  },
  chipText: {
    color: colors.dark,
    fontSize: 13,
    fontWeight: '800'
  },
  detailHero: {
    height: 210,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24
  },
  disabledButton: {
    backgroundColor: colors.borderStrong,
    borderColor: colors.borderStrong
  },
  disabledButtonText: {
    color: colors.muted
  },
  drawerContent: {
    flex: 1
  },
  drawerEmail: {
    color: colors.border
  },
  drawerHeader: {
    backgroundColor: colors.dark,
    padding: 22,
    marginBottom: 12
  },
  drawerName: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800'
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  emptyOrderCard: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginBottom: 16
  },
  faqCard: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    marginBottom: 12,
    padding: 16
  },
  formCard: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
    padding: 16
  },
  helpCard: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 10,
    padding: 14
  },
  helpText: {
    color: colors.dark,
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22
  },
  heroCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24
  },
  heroIcon: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.18)',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    width: 48
  },
  heroKicker: {
    color: colors.warning,
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 0,
    textTransform: 'uppercase'
  },
  heroSubtitle: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 23,
    marginTop: 16,
    maxWidth: 280
  },
  heroTitle: {
    color: colors.white,
    fontSize: 26,
    fontWeight: '900'
  },
  homeHero: {
    backgroundColor: colors.dark,
    borderRadius: 8,
    marginBottom: 16,
    padding: 20
  },
  infoPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.warningSoft,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 18
  },
  infoText: {
    color: colors.warningDark,
    fontWeight: '800'
  },
  inputLabel: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 12
  },
  iconButton: {
    alignItems: 'center',
    backgroundColor: '#FFF1ED',
    borderRadius: 8,
    height: 38,
    justifyContent: 'center',
    width: 38
  },
  kicker: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 0,
    textTransform: 'uppercase',
    marginBottom: 8
  },
  listItem: {
    minHeight: 58,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  loginCard: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    marginBottom: 10,
    padding: 16
  },
  loginRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12
  },
  offerCard: {
    borderRadius: 8,
    flex: 1,
    minHeight: 96,
    padding: 14,
    justifyContent: 'space-between'
  },
  offerRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18
  },
  offerText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700'
  },
  offerTitle: {
    color: colors.dark,
    fontSize: 17,
    fontWeight: '900',
    marginTop: 8
  },
  orderCard: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 14,
    padding: 16
  },
  orderItemText: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  logoutItem: {
    marginTop: 'auto',
    padding: 18,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  logoutText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '800'
  },
  metaText: {
    color: colors.muted,
    fontSize: 14
  },
  multilineInput: {
    minHeight: 82,
    textAlignVertical: 'top'
  },
  pressed: {
    opacity: 0.72
  },
  priceText: {
    color: colors.primary,
    fontWeight: '900'
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 28
  },
  quantityButton: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.borderStrong,
    borderRadius: 8,
    borderWidth: 1,
    height: 34,
    justifyContent: 'center',
    width: 34
  },
  quantityControl: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12
  },
  quantityText: {
    color: colors.dark,
    fontSize: 16,
    fontWeight: '900',
    minWidth: 24,
    textAlign: 'center'
  },
  restaurantCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: 1,
    borderColor: colors.border
  },
  restaurantImage: {
    width: 66,
    height: 66,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  restaurantMetaRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    marginTop: 6
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 36
  },
  searchBox: {
    height: 54,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    marginBottom: 24
  },
  selectAllButton: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8
  },
  selectAllText: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: '800'
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderStrong
  },
  secondaryButtonText: {
    color: colors.dark
  },
  selectedTotalText: {
    color: colors.textMuted,
    fontSize: 15,
    fontWeight: '800',
    marginTop: 2,
    textAlign: 'right'
  },
  successText: {
    color: colors.success,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 4
  },
  sectionTitle: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 14
  },
  sectionSpacing: {
    marginTop: 20
  },
  tabBar: {
    backgroundColor: colors.white,
    borderTopColor: colors.border,
    height: 64,
    paddingBottom: 8,
    paddingTop: 8
  },
  textInput: {
    backgroundColor: colors.background,
    borderColor: colors.borderStrong,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.dark,
    fontSize: 15,
    minHeight: 48,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  title: {
    color: colors.dark,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: '900',
    marginBottom: 12
  },
  titleSmall: {
    color: colors.dark,
    fontSize: 22,
    fontWeight: '900'
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: colors.borderStrong,
    paddingTop: 18,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  totalText: {
    color: colors.dark,
    fontSize: 24,
    fontWeight: '900'
  }
});
