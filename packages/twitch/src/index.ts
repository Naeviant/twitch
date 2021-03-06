/* eslint-disable filenames/match-exported */
import { deprecateClass } from '@d-fischer/shared-utils';

import { ApiClient } from './ApiClient';
/** @deprecated Use the named export `ApiClient` instead. */
const DeprecatedTwitchClient = deprecateClass(
	ApiClient,
	`[twitch] The default export has been deprecated. Use the named export instead:

\timport { ApiClient } from 'twitch';`
);
/** @deprecated Use the named export `ApiClient` instead. */
// eslint-disable-next-line @typescript-eslint/no-redeclare
type DeprecatedTwitchClient = ApiClient;
/** @deprecated Use the named export `ApiClient` instead. */
export default DeprecatedTwitchClient;
export { ApiClient };

export type { ApiConfig } from './ApiClient';

export { ChatBadgeList } from './API/Badges/ChatBadgeList';
export { ChatBadgeSet } from './API/Badges/ChatBadgeSet';
export { ChatBadgeVersion } from './API/Badges/ChatBadgeVersion';
export type { ChatBadgeScale } from './API/Badges/ChatBadgeVersion';

export { HelixPaginatedRequest } from './API/Helix/HelixPaginatedRequest';
export type { HelixPaginatedResult, HelixPaginatedResultWithTotal } from './API/Helix/HelixPaginatedResult';
export type { HelixResponse, HelixPaginatedResponse, HelixPaginatedResponseWithTotal } from './API/Helix/HelixResponse';

export { HelixBitsLeaderboard } from './API/Helix/Bits/HelixBitsLeaderboard';
export { HelixBitsLeaderboardEntry } from './API/Helix/Bits/HelixBitsLeaderboardEntry';
export { HelixCheermoteList } from './API/Helix/Bits/HelixCheermoteList';

export { HelixChannel } from './API/Helix/Channel/HelixChannel';

export type {
	HelixCreateCustomRewardData,
	HelixUpdateCustomRewardData
} from './API/Helix/ChannelPoints/HelixChannelPointsApi';
export { HelixCustomReward } from './API/Helix/ChannelPoints/HelixCustomReward';
export { HelixCustomRewardRedemption } from './API/Helix/ChannelPoints/HelixCustomRewardRedemption';
export type {
	HelixCustomRewardRedemptionStatus,
	HelixCustomRewardRedemptionTargetStatus
} from './API/Helix/ChannelPoints/HelixCustomRewardRedemption';

export { HelixClip } from './API/Helix/Clip/HelixClip';

export type {
	HelixEventSubTransportOptions,
	HelixEventSubWebHookTransportOptions
} from './API/Helix/EventSub/HelixEventSubApi';

export { HelixEventSubSubscription } from './API/Helix/EventSub/HelixEventSubSubscription';
export type {
	HelixEventSubSubscriptionData,
	HelixEventSubSubscriptionStatus,
	HelixEventSubTransportData
} from './API/Helix/EventSub/HelixEventSubSubscription';

export { HelixExtensionTransaction } from './API/Helix/Extensions/HelixExtensionTransaction';
export type { HelixExtensionTransactionData } from './API/Helix/Extensions/HelixExtensionTransaction';

export { HelixGame } from './API/Helix/Game/HelixGame';

export { HelixHypeTrainContribution } from './API/Helix/HypeTrain/HelixHypeTrainContribution';
export { HelixHypeTrainEvent } from './API/Helix/HypeTrain/HelixHypeTrainEvent';
export type { HelixHypeTrainEventData } from './API/Helix/HypeTrain/HelixHypeTrainEvent';

export { HelixBan } from './API/Helix/Moderation/HelixBan';
export { HelixBanEvent } from './API/Helix/Moderation/HelixBanEvent';
export type { HelixBanEventData } from './API/Helix/Moderation/HelixBanEvent';
export { HelixModerator } from './API/Helix/Moderation/HelixModerator';
export { HelixModeratorEvent } from './API/Helix/Moderation/HelixModeratorEvent';
export type { HelixModeratorEventData } from './API/Helix/Moderation/HelixModeratorEvent';

export { HelixChannelSearchResult } from './API/Helix/Search/HelixChannelSearchResult';

export { HelixStream, HelixStreamType } from './API/Helix/Stream/HelixStream';
export type { HelixStreamData } from './API/Helix/Stream/HelixStream';
export { HelixStreamMarker } from './API/Helix/Stream/HelixStreamMarker';
export { HelixStreamMarkerWithVideo } from './API/Helix/Stream/HelixStreamMarkerWithVideo';

export { HelixSubscription } from './API/Helix/Subscriptions/HelixSubscription';
export { HelixSubscriptionEvent } from './API/Helix/Subscriptions/HelixSubscriptionEvent';
export type { HelixSubscriptionEventData } from './API/Helix/Subscriptions/HelixSubscriptionEvent';

export { HelixTag } from './API/Helix/Tag/HelixTag';

export { HelixFollow } from './API/Helix/User/HelixFollow';
export type { HelixFollowData } from './API/Helix/User/HelixFollow';
export { HelixPrivilegedUser } from './API/Helix/User/HelixPrivilegedUser';
export { HelixBroadcasterType, HelixUser, HelixUserType } from './API/Helix/User/HelixUser';
export type { HelixUserData } from './API/Helix/User/HelixUser';

export { HelixVideo } from './API/Helix/Video/HelixVideo';

export type { HelixWebHookHubRequestOptions } from './API/Helix/WebHooks/HelixWebHooksApi';
export { HelixWebHookSubscription } from './API/Helix/WebHooks/HelixWebHookSubscription';

export { Subscription } from './API/Kraken/Subscription';

export { CheermoteList } from './API/Kraken/Bits/CheermoteList';

export { Channel } from './API/Kraken/Channel/Channel';
export { ChannelFollow } from './API/Kraken/Channel/ChannelFollow';
export { ChannelPlaceholder } from './API/Kraken/Channel/ChannelPlaceholder';
export { ChannelSubscription } from './API/Kraken/Channel/ChannelSubscription';
export { EmoteSetList } from './API/Kraken/Channel/EmoteSetList';
export { PrivilegedChannel } from './API/Kraken/Channel/PrivilegedChannel';

export { ChatEmote } from './API/Kraken/Chat/ChatEmote';
export { ChatEmoteList } from './API/Kraken/Chat/ChatEmoteList';

export { Stream, StreamType } from './API/Kraken/Stream/Stream';

export { Team } from './API/Kraken/Team/Team';
export { TeamWithUsers } from './API/Kraken/Team/TeamWithUsers';

export { PrivilegedUser } from './API/Kraken/User/PrivilegedUser';
export { User } from './API/Kraken/User/User';
export { UserBlock } from './API/Kraken/User/UserBlock';
export { UserChatInfo } from './API/Kraken/User/UserChatInfo';
export { UserFollow } from './API/Kraken/User/UserFollow';
export { UserSubscription } from './API/Kraken/User/UserSubscription';

export { CreatedVideo } from './API/Kraken/Video/CreatedVideo';
export { Video } from './API/Kraken/Video/Video';

export { ChattersList } from './API/Unsupported/ChattersList';

export type { CommercialLength } from './API/Shared/CommercialLength';
export { CheermoteBackground, CheermoteScale, CheermoteState } from './API/Shared/BaseCheermoteList';
export type { CheermoteDisplayInfo } from './API/Shared/BaseCheermoteList';

export { ConfigError } from './Errors/ConfigError';
export { HellFreezesOverError } from './Errors/HellFreezesOverError';
export { NoSubscriptionProgramError } from './Errors/NoSubscriptionProgramError';
export { StreamNotLiveError } from './Errors/StreamNotLiveError';

export { extractUserId, extractUserName } from './Toolkit/UserTools';
export type { UserIdResolvable, UserNameResolvable } from './Toolkit/UserTools';

/** @deprecated Import this from `twitch-api-call` instead. */
export { HttpStatusCodeError, TwitchApiCallType } from 'twitch-api-call';
/** @deprecated Import this from `twitch-api-call` instead. */
export type { TwitchApiCallOptions } from 'twitch-api-call';
/** @deprecated Import `HttpStatusCodeError` from `twitch-api-call` instead. */
export { HttpStatusCodeError as HTTPStatusCodeError } from 'twitch-api-call';
/** @deprecated Import `TwitchApiCallType` from `twitch-api-call` instead. */
export { TwitchApiCallType as TwitchAPICallType } from 'twitch-api-call';
/** @deprecated Import `TwitchApiCallOptions` from `twitch-api-call` instead. */
export type { TwitchApiCallOptions as TwitchAPICallOptions } from 'twitch-api-call';

/** @deprecated Import this from `twitch-auth` instead. */
export {
	AccessToken,
	InvalidTokenError,
	InvalidTokenTypeError,
	StaticAuthProvider,
	ClientCredentialsAuthProvider,
	RefreshableAuthProvider,
	TokenInfo
} from 'twitch-auth';
export type { AuthProvider, AuthProviderTokenType, RefreshConfig } from 'twitch-auth';
