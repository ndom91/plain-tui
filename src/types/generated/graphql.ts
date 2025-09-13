/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AcceptWorkspaceInviteInput = {
  inviteId: Scalars['ID']['input'];
};

export type AcceptWorkspaceInviteOutput = {
  __typename?: 'AcceptWorkspaceInviteOutput';
  error?: Maybe<MutationError>;
  invite?: Maybe<WorkspaceInvite>;
};

export type Actor = CustomerActor | DeletedCustomerActor | MachineUserActor | SystemActor | UserActor;

export type ActorConnection = {
  __typename?: 'ActorConnection';
  edges: Array<ActorEdge>;
  pageInfo: PageInfo;
};

export type ActorEdge = {
  __typename?: 'ActorEdge';
  cursor: Scalars['String']['output'];
  node: Actor;
};

export type AddAdditionalAssigneesInput = {
  machineUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  threadId: Scalars['ID']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type AddAdditionalAssigneesOutput = {
  __typename?: 'AddAdditionalAssigneesOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type AddCustomerToCustomerGroupsInput = {
  customerGroupIdentifiers: Array<CustomerGroupIdentifier>;
  customerId: Scalars['ID']['input'];
};

export type AddCustomerToCustomerGroupsOutput = {
  __typename?: 'AddCustomerToCustomerGroupsOutput';
  customerGroupMemberships?: Maybe<Array<CustomerGroupMembership>>;
  error?: Maybe<MutationError>;
};

export type AddCustomerToTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type AddCustomerToTenantsOutput = {
  __typename?: 'AddCustomerToTenantsOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type AddGeneratedReplyInput = {
  markdown: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
  timelineEntryId: Scalars['ID']['input'];
};

export type AddGeneratedReplyOutput = {
  __typename?: 'AddGeneratedReplyOutput';
  error?: Maybe<MutationError>;
  generatedReply?: Maybe<GeneratedReply>;
};

export type AddLabelsInput = {
  labelTypeIds: Array<Scalars['ID']['input']>;
  threadId: Scalars['ID']['input'];
};

export type AddLabelsOutput = {
  __typename?: 'AddLabelsOutput';
  error?: Maybe<MutationError>;
  labels: Array<Label>;
  thread?: Maybe<Thread>;
};

export type AddLabelsToUserInput = {
  entityId: Scalars['ID']['input'];
  labelTypeIds: Array<Scalars['ID']['input']>;
};

export type AddLabelsToUserOutput = {
  __typename?: 'AddLabelsToUserOutput';
  error?: Maybe<MutationError>;
  labels: Array<Label>;
  user?: Maybe<User>;
};

export type AddMembersToTierInput = {
  memberIdentifiers: Array<TierMemberIdentifierInput>;
  tierIdentifier: TierIdentifierInput;
};

export type AddMembersToTierOutput = {
  __typename?: 'AddMembersToTierOutput';
  error?: Maybe<MutationError>;
  memberships: Array<TierMembership>;
};

export type AddUserToActiveBillingRotaInput = {
  userId: Scalars['ID']['input'];
};

export type AddUserToActiveBillingRotaOutput = {
  __typename?: 'AddUserToActiveBillingRotaOutput';
  billingRota?: Maybe<BillingRota>;
  error?: Maybe<MutationError>;
};

export type AddWorkspaceAlternateSupportEmailAddressInput = {
  alternateSupportEmailAddress: Scalars['String']['input'];
};

export type AddWorkspaceAlternateSupportEmailAddressOutput = {
  __typename?: 'AddWorkspaceAlternateSupportEmailAddressOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<Actor>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  permissions: Array<Scalars['String']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  edges: Array<ApiKeyEdge>;
  pageInfo: PageInfo;
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  cursor: Scalars['String']['output'];
  node: ApiKey;
};

export type ArchiveLabelTypeInput = {
  labelTypeId: Scalars['ID']['input'];
};

export type ArchiveLabelTypeOutput = {
  __typename?: 'ArchiveLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type AssignRolesToUserInput = {
  /** @deprecated Use roleKey instead. */
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  roleKey?: InputMaybe<RoleKey>;
  userId: Scalars['ID']['input'];
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
};

export type AssignRolesToUserOutput = {
  __typename?: 'AssignRolesToUserOutput';
  error?: Maybe<MutationError>;
};

export type AssignThreadInput = {
  machineUserId?: InputMaybe<Scalars['ID']['input']>;
  threadId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type AssignThreadOutput = {
  __typename?: 'AssignThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type Attachment = {
  __typename?: 'Attachment';
  createdAt: DateTime;
  createdBy: Actor;
  fileExtension?: Maybe<Scalars['String']['output']>;
  fileMimeType: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  fileSize: FileSize;
  id: Scalars['ID']['output'];
  type: AttachmentType;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type AttachmentDownloadUrl = {
  __typename?: 'AttachmentDownloadUrl';
  attachment: Attachment;
  downloadUrl: Scalars['String']['output'];
  expiresAt: DateTime;
};

export enum AttachmentType {
  Chat = 'CHAT',
  CustomTimelineEntry = 'CUSTOM_TIMELINE_ENTRY',
  Discord = 'DISCORD',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Note = 'NOTE',
  Slack = 'SLACK',
  ThreadDiscussion = 'THREAD_DISCUSSION'
}

export type AttachmentUploadUrl = {
  __typename?: 'AttachmentUploadUrl';
  attachment: Attachment;
  expiresAt: DateTime;
  uploadFormData: Array<UploadFormData>;
  uploadFormUrl: Scalars['String']['output'];
};

export enum AttachmentVirusScanResult {
  /** The attachment is clean and safe to download. */
  Clean = 'CLEAN',
  /** The virus scan failed. */
  Failed = 'FAILED',
  /** The attachment is infected and should not be downloaded. */
  Infected = 'INFECTED',
  /** The virus scan is still pending. */
  Pending = 'PENDING'
}

export type Autoresponder = {
  __typename?: 'Autoresponder';
  conditions: Array<AutoresponderCondition>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  markdownContent?: Maybe<Scalars['String']['output']>;
  messageSources: Array<AutoresponderMessageSource>;
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  responseDelaySeconds: Scalars['Int']['output'];
  textContent: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type AutoresponderBusinessHoursCondition = {
  __typename?: 'AutoresponderBusinessHoursCondition';
  isOutsideBusinessHours: Scalars['Boolean']['output'];
};

export type AutoresponderCondition = AutoresponderBusinessHoursCondition | AutoresponderLabelCondition | AutoresponderPrioritiesCondition | AutoresponderSupportEmailsCondition | AutoresponderTierCondition;

export type AutoresponderConditionInput = {
  isOutsideBusinessHours?: InputMaybe<Scalars['Boolean']['input']>;
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  priorities?: InputMaybe<Array<Scalars['Int']['input']>>;
  supportEmailAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  tierId?: InputMaybe<Scalars['ID']['input']>;
};

export type AutoresponderConnection = {
  __typename?: 'AutoresponderConnection';
  edges: Array<AutoresponderEdge>;
  pageInfo: PageInfo;
};

export type AutoresponderEdge = {
  __typename?: 'AutoresponderEdge';
  cursor: Scalars['String']['output'];
  node: Autoresponder;
};

export type AutoresponderLabelCondition = {
  __typename?: 'AutoresponderLabelCondition';
  labelTypeIds: Array<Scalars['ID']['output']>;
};

export enum AutoresponderMessageSource {
  Api = 'API',
  Chat = 'CHAT',
  Discord = 'DISCORD',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type AutoresponderOrderInput = {
  autoresponderId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};

export type AutoresponderPrioritiesCondition = {
  __typename?: 'AutoresponderPrioritiesCondition';
  priorities: Array<Scalars['Int']['output']>;
};

export type AutoresponderSupportEmailsCondition = {
  __typename?: 'AutoresponderSupportEmailsCondition';
  supportEmailAddresses: Array<Scalars['String']['output']>;
};

export type AutoresponderTierCondition = {
  __typename?: 'AutoresponderTierCondition';
  tierId: Scalars['ID']['output'];
};

export type BeforeBreachAction = {
  __typename?: 'BeforeBreachAction';
  beforeBreachMinutes: Scalars['Int']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type BeforeBreachActionInput = {
  beforeBreachMinutes: Scalars['Int']['input'];
};

export type BillingFeatureEntitlement = {
  feature: FeatureKey;
  isEntitled: Scalars['Boolean']['output'];
};

export enum BillingInterval {
  /** @deprecated Use BillingIntervalUnit.MONTH instead */
  Month = 'MONTH',
  /** @deprecated Use BillingIntervalUnit.YEAR instead */
  Year = 'YEAR'
}

export enum BillingIntervalUnit {
  Month = 'MONTH',
  Year = 'YEAR'
}

export type BillingPlan = {
  __typename?: 'BillingPlan';
  description: Scalars['String']['output'];
  features: Array<Scalars['String']['output']>;
  highlightedLabel?: Maybe<Scalars['String']['output']>;
  isSelfCheckoutEligible: Scalars['Boolean']['output'];
  key: BillingPlanKey;
  /** @deprecated Use prices instead */
  monthlyPrice?: Maybe<Price>;
  name: Scalars['String']['output'];
  prices: Array<RecurringPrice>;
  /** @deprecated Use prices instead */
  yearlyPrice?: Maybe<Price>;
};

export type BillingPlanChangePreview = {
  __typename?: 'BillingPlanChangePreview';
  earliestEffectiveAt: DateTime;
  immediateCost: Price;
};

export type BillingPlanConnection = {
  __typename?: 'BillingPlanConnection';
  edges: Array<BillingPlanEdge>;
  pageInfo: PageInfo;
};

export type BillingPlanEdge = {
  __typename?: 'BillingPlanEdge';
  cursor: Scalars['String']['output'];
  node: BillingPlan;
};

export enum BillingPlanKey {
  Evaluate = 'EVALUATE',
  Grow = 'GROW',
  Launch = 'LAUNCH',
  Legacy = 'LEGACY',
  Scale = 'SCALE'
}

export type BillingRota = {
  __typename?: 'BillingRota';
  offRotaUserIds: Array<Scalars['ID']['output']>;
  onRotaUserIds: Array<Scalars['ID']['output']>;
};

export enum BillingSeatType {
  /** @deprecated Field no longer supported */
  EngRota = 'ENG_ROTA',
  /** @deprecated Field no longer supported */
  Member = 'MEMBER',
  /** @deprecated Field no longer supported */
  Viewer = 'VIEWER'
}

export type BillingSubscription = {
  __typename?: 'BillingSubscription';
  cancelsAt?: Maybe<DateTime>;
  endedAt?: Maybe<DateTime>;
  entitlements: Array<BillingFeatureEntitlement>;
  /** @deprecated Field no longer supported */
  interval: BillingInterval;
  planKey: BillingPlanKey;
  planName: Scalars['String']['output'];
  status: BillingSubscriptionStatus;
  trialEndsAt?: Maybe<DateTime>;
};

export enum BillingSubscriptionStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type BooleanInput = {
  value: Scalars['Boolean']['input'];
};

/** A boolean setting */
export type BooleanSetting = {
  __typename?: 'BooleanSetting';
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  booleanValue: Scalars['Boolean']['output'];
  /** The setting code. */
  code: Scalars['String']['output'];
  /** The scope of the setting. */
  scope: SettingScope;
};

export type BreachAction = BeforeBreachAction;

export type BreachActionInput = {
  beforeBreachAction?: InputMaybe<BeforeBreachActionInput>;
};

export type BulkJoinSlackChannelsInput = {
  integrationId: Scalars['ID']['input'];
};

export type BulkJoinSlackChannelsOutput = {
  __typename?: 'BulkJoinSlackChannelsOutput';
  error?: Maybe<MutationError>;
};

export type BulkUpsertThreadFieldResult = {
  __typename?: 'BulkUpsertThreadFieldResult';
  result?: Maybe<UpsertResult>;
  threadField?: Maybe<ThreadField>;
};

export type BulkUpsertThreadFieldsInput = {
  inputs: Array<UpsertThreadFieldInput>;
};

export type BulkUpsertThreadFieldsOutput = {
  __typename?: 'BulkUpsertThreadFieldsOutput';
  error?: Maybe<MutationError>;
  results: Array<BulkUpsertThreadFieldResult>;
};

/**
 * Represents the times in which you are open for business during a week. If a day is null, it means that day you are not
 * open for business.
 */
export type BusinessHours = {
  __typename?: 'BusinessHours';
  createdAt: DateTime;
  createdBy: InternalActor;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  weekDays: BusinessHoursWeekDays;
};

export type BusinessHoursSlot = {
  __typename?: 'BusinessHoursSlot';
  closesAt: Scalars['String']['output'];
  opensAt: Scalars['String']['output'];
  timezone: Timezone;
  weekday: WeekDay;
};

export type BusinessHoursSlotInput = {
  closesAt: Scalars['String']['input'];
  opensAt: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
  weekday: WeekDay;
};

export type BusinessHoursWeekDay = {
  __typename?: 'BusinessHoursWeekDay';
  endTime: Time;
  startTime: Time;
};

export type BusinessHoursWeekDayInput = {
  /** The time you close for business on this day as an UTC ISO time. For example: 17:00Z . */
  endTime: Scalars['String']['input'];
  /** The time you open for business on this day as an UTC ISO time. For example: 09:00Z . */
  startTime: Scalars['String']['input'];
};

export type BusinessHoursWeekDays = {
  __typename?: 'BusinessHoursWeekDays';
  friday?: Maybe<BusinessHoursWeekDay>;
  monday?: Maybe<BusinessHoursWeekDay>;
  saturday?: Maybe<BusinessHoursWeekDay>;
  sunday?: Maybe<BusinessHoursWeekDay>;
  thursday?: Maybe<BusinessHoursWeekDay>;
  tuesday?: Maybe<BusinessHoursWeekDay>;
  wednesday?: Maybe<BusinessHoursWeekDay>;
};

/** Represents the times in which you are open for business during a week. Only provide the days you are open for business. */
export type BusinessHoursWeekDaysInput = {
  friday?: InputMaybe<BusinessHoursWeekDayInput>;
  monday?: InputMaybe<BusinessHoursWeekDayInput>;
  saturday?: InputMaybe<BusinessHoursWeekDayInput>;
  sunday?: InputMaybe<BusinessHoursWeekDayInput>;
  thursday?: InputMaybe<BusinessHoursWeekDayInput>;
  tuesday?: InputMaybe<BusinessHoursWeekDayInput>;
  wednesday?: InputMaybe<BusinessHoursWeekDayInput>;
};

export type CalculateRoleChangeCostInput = {
  quantity?: InputMaybe<IntInput>;
  roleKey: RoleKey;
  userId?: InputMaybe<Scalars['ID']['input']>;
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
};

export type CalculateRoleChangeCostOutput = {
  __typename?: 'CalculateRoleChangeCostOutput';
  error?: Maybe<MutationError>;
  roleChangeCost?: Maybe<RoleChangeCost>;
};

export type ChangeBillingPlanInput = {
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  planKey: BillingPlanKey;
};

export type ChangeBillingPlanOutput = {
  __typename?: 'ChangeBillingPlanOutput';
  error?: Maybe<MutationError>;
};

export type ChangeThreadCustomerInput = {
  customerId: Scalars['ID']['input'];
  threadId: Scalars['ID']['input'];
};

export type ChangeThreadCustomerOutput = {
  __typename?: 'ChangeThreadCustomerOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type ChangeThreadPriorityInput = {
  priority: Scalars['Int']['input'];
  threadId: Scalars['ID']['input'];
};

export type ChangeThreadPriorityOutput = {
  __typename?: 'ChangeThreadPriorityOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export enum ChangeType {
  Added = 'ADDED',
  Removed = 'REMOVED',
  Updated = 'UPDATED'
}

export type ChangeUserStatusInput = {
  status: UserStatus;
  userId: Scalars['ID']['input'];
};

export type ChangeUserStatusOutput = {
  __typename?: 'ChangeUserStatusOutput';
  error?: Maybe<MutationError>;
  user?: Maybe<User>;
};

export type Chat = {
  __typename?: 'Chat';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  customerReadAt?: Maybe<DateTime>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type ChatApp = {
  __typename?: 'ChatApp';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  logo?: Maybe<WorkspaceFile>;
  name: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ChatAppConnection = {
  __typename?: 'ChatAppConnection';
  edges: Array<ChatAppEdge>;
  pageInfo: PageInfo;
};

export type ChatAppEdge = {
  __typename?: 'ChatAppEdge';
  cursor: Scalars['String']['output'];
  node: ChatApp;
};

export type ChatAppHiddenSecret = {
  __typename?: 'ChatAppHiddenSecret';
  chatAppId: Scalars['ID']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ChatAppSecret = {
  __typename?: 'ChatAppSecret';
  chatAppId: Scalars['ID']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  secret: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ChatEntry = {
  __typename?: 'ChatEntry';
  attachments: Array<Attachment>;
  chatId: Scalars['ID']['output'];
  customerReadAt?: Maybe<DateTime>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ChatThreadChannelDetails = {
  __typename?: 'ChatThreadChannelDetails';
  customerReadAt: DateTime;
};

export type CompaniesFilter = {
  companyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * True to only return companies that have been deleted. False to only return companies that have not been deleted.
   * Omit to return all companies.
   */
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Query to search for companies. */
export type CompaniesSearchQuery = {
  /**
   * The term to search for. It must be at least 2 characters long. The search is case-insensitive on these two fields:
   * - the company name (partial match)
   * - the company domain name (partial match)
   */
  term: Scalars['String']['input'];
};

export type Company = {
  __typename?: 'Company';
  accountOwner?: Maybe<User>;
  contractValue?: Maybe<Scalars['Int']['output']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<InternalActor>;
  domainName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  threadChannelAssociations: Array<ThreadChannelAssociation>;
  tier?: Maybe<Tier>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type CompanyLogoUrlArgs = {
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  edges: Array<CompanyEdge>;
  pageInfo: PageInfo;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  cursor: Scalars['String']['output'];
  node: Company;
};

export type CompanyIdentifierInput = {
  /** The domain name of the company (e.g. plain.com). Alternatively, you can provide a full URL (e.g. https://www.plain.com) and we will do our best to extract the domain name. */
  companyDomainName?: InputMaybe<Scalars['String']['input']>;
  /** Plain's internal identifier for the company. */
  companyId?: InputMaybe<Scalars['ID']['input']>;
};

export type CompanySearchResult = {
  __typename?: 'CompanySearchResult';
  company: Company;
};

export type CompanySearchResultConnection = {
  __typename?: 'CompanySearchResultConnection';
  edges: Array<CompanySearchResultEdge>;
  pageInfo: PageInfo;
};

export type CompanySearchResultEdge = {
  __typename?: 'CompanySearchResultEdge';
  cursor: Scalars['String']['output'];
  node: CompanySearchResult;
};

export type CompanyTierMembership = {
  __typename?: 'CompanyTierMembership';
  companyId: Scalars['ID']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  tierId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CompleteJiraAuthorizationInput = {
  refreshToken: Scalars['String']['input'];
  siteId: Scalars['String']['input'];
};

export type CompleteServiceAuthorizationInput = {
  jira?: InputMaybe<CompleteJiraAuthorizationInput>;
  /** JSON-encoded payload of the service configuration. */
  payload?: InputMaybe<Scalars['String']['input']>;
  serviceAuthorizationId: Scalars['ID']['input'];
};

export type CompleteServiceAuthorizationOutput = {
  __typename?: 'CompleteServiceAuthorizationOutput';
  error?: Maybe<MutationError>;
  serviceAuthorization?: Maybe<ServiceAuthorization>;
};

export type ComponentBadge = {
  __typename?: 'ComponentBadge';
  badgeColor?: Maybe<ComponentBadgeColor>;
  badgeLabel: Scalars['String']['output'];
};

export enum ComponentBadgeColor {
  Blue = 'BLUE',
  Green = 'GREEN',
  Grey = 'GREY',
  Red = 'RED',
  Yellow = 'YELLOW'
}

export type ComponentBadgeInput = {
  badgeColor?: InputMaybe<ComponentBadgeColor>;
  /** The label of the badge. Maximum 500 characters. */
  badgeLabel: Scalars['String']['input'];
};

export type ComponentContainer = {
  __typename?: 'ComponentContainer';
  containerContent: Array<ComponentContainerContent>;
};

export type ComponentContainerContent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

export type ComponentContainerContentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentContainerInput = {
  /** Must contain at least one component. */
  containerContent: Array<ComponentContainerContentInput>;
};

export type ComponentCopyButton = {
  __typename?: 'ComponentCopyButton';
  copyButtonTooltipLabel?: Maybe<Scalars['String']['output']>;
  copyButtonValue: Scalars['String']['output'];
};

export type ComponentCopyButtonInput = {
  /** The tooltip label. Maximum 500 characters. */
  copyButtonTooltipLabel?: InputMaybe<Scalars['String']['input']>;
  /** The value to be copied. Maximum 1000 characters. */
  copyButtonValue: Scalars['String']['input'];
};

export type ComponentDivider = {
  __typename?: 'ComponentDivider';
  dividerSpacingSize?: Maybe<ComponentDividerSpacingSize>;
  /** @deprecated use dividerSpacingSize instead */
  spacingSize?: Maybe<ComponentDividerSpacingSize>;
};

export type ComponentDividerInput = {
  dividerSpacingSize?: InputMaybe<ComponentDividerSpacingSize>;
  /** @deprecated use dividerSpacingSize instead */
  spacingSize?: InputMaybe<ComponentDividerSpacingSize>;
};

export enum ComponentDividerSpacingSize {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS'
}

export type ComponentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentContainer?: InputMaybe<ComponentContainerInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentLinkButton = {
  __typename?: 'ComponentLinkButton';
  /** @deprecated use linkButtonLabel instead */
  label: Scalars['String']['output'];
  linkButtonLabel: Scalars['String']['output'];
  linkButtonUrl: Scalars['String']['output'];
  /** @deprecated use linkButtonUrl instead */
  url: Scalars['String']['output'];
};

export type ComponentLinkButtonInput = {
  /** @deprecated use linkButtonLabel instead */
  label?: InputMaybe<Scalars['String']['input']>;
  /** The label of the button. Maximum 500 characters. */
  linkButtonLabel?: InputMaybe<Scalars['String']['input']>;
  /** Must be a valid URL. */
  linkButtonUrl?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated use linkButtonUrl instead */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentPlainText = {
  __typename?: 'ComponentPlainText';
  plainText: Scalars['String']['output'];
  plainTextColor?: Maybe<ComponentPlainTextColor>;
  plainTextSize?: Maybe<ComponentPlainTextSize>;
};

export enum ComponentPlainTextColor {
  Error = 'ERROR',
  Muted = 'MUTED',
  Normal = 'NORMAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

export type ComponentPlainTextInput = {
  /** The text content, without markdown support. Must be between 1 and 5000 characters. */
  plainText: Scalars['String']['input'];
  plainTextColor?: InputMaybe<ComponentPlainTextColor>;
  plainTextSize?: InputMaybe<ComponentPlainTextSize>;
};

export enum ComponentPlainTextSize {
  L = 'L',
  M = 'M',
  S = 'S'
}

export type ComponentRow = {
  __typename?: 'ComponentRow';
  rowAsideContent: Array<ComponentRowContent>;
  rowMainContent: Array<ComponentRowContent>;
};

export type ComponentRowContent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentSpacer | ComponentText;

export type ComponentRowContentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentRowInput = {
  rowAsideContent: Array<ComponentRowContentInput>;
  /** Must contain at least one component. */
  rowMainContent: Array<ComponentRowContentInput>;
};

export type ComponentSpacer = {
  __typename?: 'ComponentSpacer';
  /** @deprecated Use spacerSize instead, which has the same type */
  size: ComponentSpacerSize;
  spacerSize: ComponentSpacerSize;
};

export type ComponentSpacerInput = {
  /** @deprecated use spacerSize instead */
  size?: InputMaybe<ComponentSpacerSize>;
  /** Required input, will be made required after deprecated fields are removed. */
  spacerSize?: InputMaybe<ComponentSpacerSize>;
};

export enum ComponentSpacerSize {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS'
}

export type ComponentText = {
  __typename?: 'ComponentText';
  /** @deprecated Use textColor instead, which has the same type */
  color?: Maybe<ComponentTextColor>;
  /** @deprecated Use textSize instead, which has the same type */
  size?: Maybe<ComponentTextSize>;
  text: Scalars['String']['output'];
  textColor?: Maybe<ComponentTextColor>;
  textSize?: Maybe<ComponentTextSize>;
};

export enum ComponentTextColor {
  Error = 'ERROR',
  Muted = 'MUTED',
  Normal = 'NORMAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

export type ComponentTextInput = {
  /** @deprecated use textColor instead */
  color?: InputMaybe<ComponentTextColor>;
  /** @deprecated use textSize instead */
  size?: InputMaybe<ComponentTextSize>;
  /** The text content, with markdown support. Must be between 1 and 5000 characters. */
  text: Scalars['String']['input'];
  textColor?: InputMaybe<ComponentTextColor>;
  textSize?: InputMaybe<ComponentTextSize>;
};

export enum ComponentTextSize {
  L = 'L',
  M = 'M',
  S = 'S'
}

export type ConnectedDiscordChannel = {
  __typename?: 'ConnectedDiscordChannel';
  createdAt: DateTime;
  createdBy: InternalActor;
  discordChannelId: Scalars['String']['output'];
  discordGuildId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ConnectedDiscordChannelConnection = {
  __typename?: 'ConnectedDiscordChannelConnection';
  edges: Array<ConnectedDiscordChannelEdge>;
  pageInfo: PageInfo;
};

export type ConnectedDiscordChannelEdge = {
  __typename?: 'ConnectedDiscordChannelEdge';
  cursor: Scalars['String']['output'];
  node: ConnectedDiscordChannel;
};

export type ConnectedMsTeamsChannel = {
  __typename?: 'ConnectedMSTeamsChannel';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  msTeamsChannelId: Scalars['ID']['output'];
  msTeamsTeamId: Scalars['ID']['output'];
  msTeamsTenantId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  teamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  workspaceId: Scalars['ID']['output'];
};

export type ConnectedMsTeamsChannelConnection = {
  __typename?: 'ConnectedMSTeamsChannelConnection';
  edges: Array<ConnectedMsTeamsChannelEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ConnectedMsTeamsChannelEdge = {
  __typename?: 'ConnectedMSTeamsChannelEdge';
  cursor: Scalars['String']['output'];
  node: ConnectedMsTeamsChannel;
};

export type ConnectedSlackChannel = {
  __typename?: 'ConnectedSlackChannel';
  channelType: ConnectedSlackChannelType;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  slackChannelId: Scalars['String']['output'];
  slackTeamId: Scalars['String']['output'];
  threadChannelAssociations: Array<SlackThreadChannelAssociation>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ConnectedSlackChannelConnection = {
  __typename?: 'ConnectedSlackChannelConnection';
  edges: Array<ConnectedSlackChannelEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ConnectedSlackChannelEdge = {
  __typename?: 'ConnectedSlackChannelEdge';
  cursor: Scalars['String']['output'];
  node: ConnectedSlackChannel;
};

export enum ConnectedSlackChannelType {
  /** A channel that Plain tracks for customer support requests. */
  Customer = 'CUSTOMER',
  /** A channel that Plain tracks for internal team discussions. */
  Discussion = 'DISCUSSION'
}

export type ConnectedSlackChannelsFilter = {
  channelTypes?: InputMaybe<Array<ConnectedSlackChannelType>>;
  isEnabled?: InputMaybe<BooleanInput>;
  slackTeamIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateApiKeyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  machineUserId: Scalars['ID']['input'];
  permissions: Array<Scalars['String']['input']>;
};

export type CreateApiKeyOutput = {
  __typename?: 'CreateApiKeyOutput';
  apiKey?: Maybe<ApiKey>;
  apiKeySecret?: Maybe<Scalars['String']['output']>;
  error?: Maybe<MutationError>;
};

export type CreateAttachmentDownloadUrlInput = {
  attachmentId: Scalars['ID']['input'];
};

export type CreateAttachmentDownloadUrlOutput = {
  __typename?: 'CreateAttachmentDownloadUrlOutput';
  attachmentDownloadUrl?: Maybe<AttachmentDownloadUrl>;
  /** The result of the virus scan on this attachment. If this is null, it means that your workspace does not have virus scan checks enabled. */
  attachmentVirusScanResult?: Maybe<AttachmentVirusScanResult>;
  error?: Maybe<MutationError>;
};

export type CreateAttachmentUploadUrlInput = {
  attachmentType: AttachmentType;
  customerId: Scalars['ID']['input'];
  fileName: Scalars['String']['input'];
  fileSizeBytes: Scalars['Int']['input'];
};

export type CreateAttachmentUploadUrlOutput = {
  __typename?: 'CreateAttachmentUploadUrlOutput';
  attachmentUploadUrl?: Maybe<AttachmentUploadUrl>;
  error?: Maybe<MutationError>;
};

export type CreateAutoresponderInput = {
  conditions: Array<AutoresponderConditionInput>;
  isEnabled: Scalars['Boolean']['input'];
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  messageSources: Array<AutoresponderMessageSource>;
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  responseDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
  textContent: Scalars['String']['input'];
};

export type CreateAutoresponderOutput = {
  __typename?: 'CreateAutoresponderOutput';
  autoresponder?: Maybe<Autoresponder>;
  error?: Maybe<MutationError>;
};

export type CreateBillingPortalSessionOutput = {
  __typename?: 'CreateBillingPortalSessionOutput';
  billingPortalSessionUrl?: Maybe<Scalars['String']['output']>;
  error?: Maybe<MutationError>;
};

export type CreateChatAppInput = {
  logo?: InputMaybe<WorkspaceFileInput>;
  name: Scalars['String']['input'];
};

export type CreateChatAppOutput = {
  __typename?: 'CreateChatAppOutput';
  chatApp?: Maybe<ChatApp>;
  error?: Maybe<MutationError>;
};

export type CreateChatAppSecretInput = {
  chatAppId: Scalars['ID']['input'];
};

export type CreateChatAppSecretOutput = {
  __typename?: 'CreateChatAppSecretOutput';
  chatAppSecret?: Maybe<ChatAppSecret>;
  error?: Maybe<MutationError>;
};

export type CreateCheckoutSessionInput = {
  /** @deprecated Use intervalUnit instead */
  interval?: InputMaybe<BillingInterval>;
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  plan: BillingPlanKey;
};

export type CreateCheckoutSessionOutput = {
  __typename?: 'CreateCheckoutSessionOutput';
  error?: Maybe<MutationError>;
  sessionClientSecret?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type to create a new customer card config.
 *
 * By default new customer cards will have an ordering of 100000 (to place them at the bottom).
 */
export type CreateCustomerCardConfigInput = {
  /** An array of headers name-value pairs (maximum length of array: 20). */
  apiHeaders: Array<CustomerCardConfigApiHeaderInput>;
  /** The URL from which this card should be loaded (must start with `https://` and be a valid URL, max length: 600 characters). */
  apiUrl: Scalars['String']['input'];
  /** The default time the card should be cached for if no TTL is provided in the card response. (minimum: 15 seconds, maximum: 1 year or  31,536,000 seconds). */
  defaultTimeToLiveSeconds: Scalars['Int']['input'];
  /** The key of the card (must be unique in a workspace, max length: 500 characters, must match regex: `[a-zA-Z0-9_-]+`). */
  key: Scalars['String']['input'];
  /** The title of the card (max length: 500 characters). */
  title: Scalars['String']['input'];
};

export type CreateCustomerCardConfigOutput = {
  __typename?: 'CreateCustomerCardConfigOutput';
  /** The created customer card config. */
  customerCardConfig?: Maybe<CustomerCardConfig>;
  error?: Maybe<MutationError>;
};

export type CreateCustomerEventInput = {
  /** The components used to create the event's contents. */
  components: Array<EventComponentInput>;
  /** The customer id of the customer that the event is for. */
  customerIdentifier: CustomerIdentifierInput;
  /** The external ID of this event. You can use this field to store your own unique identifier for this event. This must be unique. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** When provided, this will override the timestamp of the event. Useful when backfilling events. Must be in ISO 8601 format (e.g. 2024-10-28T18:30:00Z). */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  /** The title of the event. */
  title: Scalars['String']['input'];
};

export type CreateCustomerEventOutput = {
  __typename?: 'CreateCustomerEventOutput';
  customerEvent?: Maybe<CustomerEvent>;
  error?: Maybe<MutationError>;
};

export type CreateCustomerGroupInput = {
  color: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateCustomerGroupOutput = {
  __typename?: 'CreateCustomerGroupOutput';
  customerGroup?: Maybe<CustomerGroup>;
  error?: Maybe<MutationError>;
};

export type CreateCustomerSurveyInput = {
  conditions?: InputMaybe<Array<CustomerSurveyConditionInput>>;
  customerIntervalDays?: InputMaybe<Scalars['Int']['input']>;
  isEnabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
  responseDelayMinutes?: InputMaybe<Scalars['Int']['input']>;
  template: CustomerSurveyTemplateInput;
};

export type CreateCustomerSurveyOutput = {
  __typename?: 'CreateCustomerSurveyOutput';
  customerSurvey?: Maybe<CustomerSurvey>;
  error?: Maybe<MutationError>;
};

export type CreateEmailPreviewUrlInput = {
  customerId: Scalars['ID']['input'];
  emailId: Scalars['ID']['input'];
};

export type CreateEmailPreviewUrlOutput = {
  __typename?: 'CreateEmailPreviewUrlOutput';
  emailPreviewUrl?: Maybe<EmailPreviewUrl>;
  error?: Maybe<MutationError>;
};

export type CreateEscalationPathInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  steps: Array<EscalationPathStepInput>;
};

export type CreateEscalationPathOutput = {
  __typename?: 'CreateEscalationPathOutput';
  error?: Maybe<MutationError>;
  escalationPath?: Maybe<EscalationPath>;
};

export type CreateHelpCenterArticleGroupInput = {
  helpCenterId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  /** Parent group ID. If not provided, creates a top-level group. */
  parentHelpCenterArticleGroupId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateHelpCenterArticleGroupOutput = {
  __typename?: 'CreateHelpCenterArticleGroupOutput';
  error?: Maybe<MutationError>;
  helpCenterArticleGroup?: Maybe<HelpCenterArticleGroup>;
};

export type CreateHelpCenterInput = {
  authMechanism?: InputMaybe<HelpCenterAuthMechanismInput>;
  bodyCustomJs?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  favicon?: InputMaybe<HelpCenterThemedImageInput>;
  headCustomJs?: InputMaybe<Scalars['String']['input']>;
  internalName: Scalars['String']['input'];
  isChatEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<HelpCenterThemedImageInput>;
  publicName: Scalars['String']['input'];
  socialPreviewImage?: InputMaybe<WorkspaceFileInput>;
  subdomain: Scalars['String']['input'];
  type: HelpCenterType;
};

export type CreateHelpCenterOutput = {
  __typename?: 'CreateHelpCenterOutput';
  error?: Maybe<MutationError>;
  helpCenter?: Maybe<HelpCenter>;
};

export type CreateIndexedDocumentInput = {
  knowledgeSourceId: Scalars['ID']['input'];
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  url: Scalars['String']['input'];
};

export type CreateIndexedDocumentOutput = {
  __typename?: 'CreateIndexedDocumentOutput';
  error?: Maybe<MutationError>;
  indexedDocument?: Maybe<IndexedDocument>;
};

export type CreateIssueTrackerIssueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  fields: Array<IssueTrackerFieldInput>;
  issueTrackerType: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateIssueTrackerIssueOutput = {
  __typename?: 'CreateIssueTrackerIssueOutput';
  error?: Maybe<MutationError>;
  threadLinkCandidate?: Maybe<ThreadLinkCandidate>;
};

export type CreateKnowledgeSourceInput = {
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  type: KnowledgeSourceType;
  url: Scalars['String']['input'];
};

export type CreateKnowledgeSourceOutput = {
  __typename?: 'CreateKnowledgeSourceOutput';
  error?: Maybe<MutationError>;
  knowledgeSource?: Maybe<KnowledgeSource>;
};

export type CreateLabelTypeInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentLabelTypeId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<LabelTypeType>;
};

export type CreateLabelTypeOutput = {
  __typename?: 'CreateLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type CreateMachineUserInput = {
  avatar?: InputMaybe<WorkspaceFileInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  publicName: Scalars['String']['input'];
  /** The type of machine user. Defaults to API_USER if not specified. */
  type?: InputMaybe<MachineUserType>;
};

export type CreateMachineUserOutput = {
  __typename?: 'CreateMachineUserOutput';
  error?: Maybe<MutationError>;
  machineUser?: Maybe<MachineUser>;
};

export type CreateMyFavoritePageInput = {
  key: Scalars['String']['input'];
};

export type CreateMyFavoritePageOutput = {
  __typename?: 'CreateMyFavoritePageOutput';
  error?: Maybe<MutationError>;
  favoritePage?: Maybe<FavoritePage>;
};

export type CreateMyLinearIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateMyLinearIntegrationOutput = {
  __typename?: 'CreateMyLinearIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserLinearIntegration>;
};

export type CreateMyMsTeamsIntegrationInput = {
  authCode: Scalars['ID']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateMyMsTeamsIntegrationOutput = {
  __typename?: 'CreateMyMSTeamsIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserMsTeamsIntegration>;
};

export type CreateMySlackIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateMySlackIntegrationOutput = {
  __typename?: 'CreateMySlackIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserSlackIntegration>;
};

export type CreateNoteInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerId: Scalars['ID']['input'];
  markdown?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  threadId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateNoteOutput = {
  __typename?: 'CreateNoteOutput';
  error?: Maybe<MutationError>;
  note?: Maybe<Note>;
};

export type CreateSavedThreadsViewInput = {
  color: Scalars['String']['input'];
  icon: Scalars['String']['input'];
  name: Scalars['String']['input'];
  threadsFilter: SavedThreadsViewFilterInput;
};

export type CreateSavedThreadsViewOutput = {
  __typename?: 'CreateSavedThreadsViewOutput';
  error?: Maybe<MutationError>;
  savedThreadsView?: Maybe<SavedThreadsView>;
};

export type CreateServiceLevelAgreementInput = {
  serviceLevelAgreement: ServiceLevelAgreementInput;
  tierId: Scalars['ID']['input'];
};

export type CreateServiceLevelAgreementOutput = {
  __typename?: 'CreateServiceLevelAgreementOutput';
  error?: Maybe<MutationError>;
  serviceLevelAgreement?: Maybe<ServiceLevelAgreement>;
};

export type CreateSnippetInput = {
  markdown?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /** Used to group snippets, only accepts alphanumeric characters */
  path?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type CreateSnippetOutput = {
  __typename?: 'CreateSnippetOutput';
  error?: Maybe<MutationError>;
  snippet?: Maybe<Snippet>;
};

/** Only one of the fields can be set. */
export type CreateThreadAssignedToInput = {
  machineUserId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateThreadChannelAssociationInput = {
  companyIdentifier: CompanyIdentifierInput;
  connectedSlackChannelId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateThreadChannelAssociationOutput = {
  __typename?: 'CreateThreadChannelAssociationOutput';
  error?: Maybe<MutationError>;
  threadChannelAssociation?: Maybe<ThreadChannelAssociation>;
};

export type CreateThreadDiscussionInput = {
  connectedSlackChannelId: Scalars['ID']['input'];
  markdownContent: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};

export type CreateThreadDiscussionOutput = {
  __typename?: 'CreateThreadDiscussionOutput';
  error?: Maybe<MutationError>;
  threadDiscussion?: Maybe<ThreadDiscussion>;
};

export type CreateThreadEventInput = {
  /** The components used to create the event's contents. */
  components: Array<EventComponentInput>;
  /** The external ID of this event. You can use this field to store your own unique identifier for this event. This must be unique. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** The thread id of the thread that the event is for. */
  threadId: Scalars['ID']['input'];
  /** When provided, this will override the timestamp of the event. Useful when backfilling events. Must be in ISO 8601 format (e.g. 2024-10-28T18:30:00Z). */
  timestamp?: InputMaybe<Scalars['String']['input']>;
  /** The title of the event. */
  title: Scalars['String']['input'];
};

export type CreateThreadEventOutput = {
  __typename?: 'CreateThreadEventOutput';
  error?: Maybe<MutationError>;
  threadEvent?: Maybe<ThreadEvent>;
};

export type CreateThreadFieldOnThreadInput = {
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  stringValue?: InputMaybe<Scalars['String']['input']>;
  type: ThreadFieldSchemaType;
};

export type CreateThreadFieldSchemaInput = {
  defaultBooleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  defaultStringValue?: InputMaybe<Scalars['String']['input']>;
  dependsOnLabelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  dependsOnThreadField?: InputMaybe<DependsOnThreadFieldInput>;
  description: Scalars['String']['input'];
  enumValues: Array<Scalars['String']['input']>;
  isAiAutoFillEnabled: Scalars['Boolean']['input'];
  isRequired: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
  label: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  type: ThreadFieldSchemaType;
};

export type CreateThreadFieldSchemaOutput = {
  __typename?: 'CreateThreadFieldSchemaOutput';
  error?: Maybe<MutationError>;
  threadFieldSchema?: Maybe<ThreadFieldSchema>;
};

export type CreateThreadInput = {
  /** User or machine user this thread should be assigned to. */
  assignedTo?: InputMaybe<CreateThreadAssignedToInput>;
  /**
   * An array of attachments for the first timeline entry in the thread.
   * @deprecated Use sendChat and sendCustomerChat mutations instead. Both allow you to backdate messages.
   */
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The channel to create the thread for. Currently supported: API, EMAIL, SLACK, MS_TEAMS, or CHAT. Defaults to API. */
  channel?: InputMaybe<ThreadChannel>;
  /** Channel details for the thread, required if channel is SLACK or MS_TEAMS */
  channelDetails?: InputMaybe<ThreadChannelDetailsInput>;
  /**
   * The components used to create the first timeline entry in the thread.
   * @deprecated Use sendChat and sendCustomerChat mutations instead. Both allow you to backdate messages.
   */
  components?: InputMaybe<Array<ComponentInput>>;
  /** The identifier of the customer being either the existing customer ID, the customer's email address or and external ID. */
  customerIdentifier: CustomerIdentifierInput;
  /**
   * The optional description for this thread. This is used to display a preview of the thread in the UI.
   * If not provided, we will automatically infer it from the components you provided.
   */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The external ID of this thread. You can use this field to store your own unique identifier for this thread. */
  externalId?: InputMaybe<Scalars['ID']['input']>;
  /** An array of label types to attach to the thread upon creation. */
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The priority of the thread. Valid values are 0, 1, 2, 3, from most to least urgent, defaults to 2 (normal). */
  priority?: InputMaybe<Scalars['Int']['input']>;
  /** A thread may be assigned to a specific tenant. */
  tenantIdentifier?: InputMaybe<TenantIdentifierInput>;
  /** An array of thread fields to attach to the thread upon creation. */
  threadFields?: InputMaybe<Array<CreateThreadFieldOnThreadInput>>;
  /** The title of the thread. */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateThreadLinkInput = {
  jiraIssue?: InputMaybe<JiraIssueThreadLinkInput>;
  linearIssue?: InputMaybe<LinearIssueThreadLinkInput>;
  plainThread?: InputMaybe<PlainThreadLinkInput>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  sourceType?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
};

export type CreateThreadLinkOutput = {
  __typename?: 'CreateThreadLinkOutput';
  error?: Maybe<MutationError>;
  threadLink?: Maybe<ThreadLink>;
};

export type CreateThreadOutput = {
  __typename?: 'CreateThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type CreateTierInput = {
  /** The color to assign to this tier, given by its hex code (e.g. #FABADA). This color is used in Plain's UI to represent this tier. */
  color: Scalars['String']['input'];
  /** Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it. If not provided, it defaults to 2 (normal priority). */
  defaultThreadPriority?: InputMaybe<Scalars['Int']['input']>;
  /** The external ID of this tier. You can use this field to store your own unique identifier for this tier. This must be unique in your workspace. */
  externalId: Scalars['String']['input'];
  /**
   * If set to true, this tier will be applied to all threads that do not match any other tier.
   *
   * Only one tier can be the default tier.
   *
   * Default: false
   */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  memberIdentifiers: Array<TierMemberIdentifierInput>;
  /** The name of this tier. */
  name: Scalars['String']['input'];
};

export type CreateTierOutput = {
  __typename?: 'CreateTierOutput';
  error?: Maybe<MutationError>;
  tier?: Maybe<Tier>;
};

export type CreateUserAccountInput = {
  fullName: Scalars['String']['input'];
  marketingConsent?: InputMaybe<Scalars['Boolean']['input']>;
  publicName: Scalars['String']['input'];
};

export type CreateUserAccountOutput = {
  __typename?: 'CreateUserAccountOutput';
  error?: Maybe<MutationError>;
  userAccount?: Maybe<UserAccount>;
};

export type CreateUserAuthDiscordChannelIntegrationInput = {
  authCode: Scalars['String']['input'];
  discordGuildId: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateUserAuthDiscordChannelIntegrationOutput = {
  __typename?: 'CreateUserAuthDiscordChannelIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserAuthDiscordChannelIntegration>;
};

export type CreateUserAuthSlackIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateUserAuthSlackIntegrationOutput = {
  __typename?: 'CreateUserAuthSlackIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserAuthSlackIntegration>;
};

export type CreateWebhookTargetInput = {
  description: Scalars['String']['input'];
  eventSubscriptions: Array<WebhookTargetEventSubscriptionInput>;
  isEnabled: Scalars['Boolean']['input'];
  url: Scalars['String']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWebhookTargetOutput = {
  __typename?: 'CreateWebhookTargetOutput';
  error?: Maybe<MutationError>;
  webhookTarget?: Maybe<WebhookTarget>;
};

export type CreateWorkflowRuleInput = {
  name: Scalars['String']['input'];
  /** JSON-encoded payload of the rule definition. */
  payload: Scalars['String']['input'];
};

export type CreateWorkflowRuleOutput = {
  __typename?: 'CreateWorkflowRuleOutput';
  error?: Maybe<MutationError>;
  workflowRule?: Maybe<WorkflowRule>;
};

export type CreateWorkspaceDiscordChannelIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateWorkspaceDiscordChannelIntegrationOutput = {
  __typename?: 'CreateWorkspaceDiscordChannelIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceDiscordChannelIntegration>;
};

export type CreateWorkspaceDiscordIntegrationInput = {
  name: Scalars['String']['input'];
  webhookUrl: Scalars['String']['input'];
};

export type CreateWorkspaceDiscordIntegrationOutput = {
  __typename?: 'CreateWorkspaceDiscordIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceDiscordIntegration>;
};

export type CreateWorkspaceEmailDomainSettingsInput = {
  supportEmailAddress: Scalars['String']['input'];
};

export type CreateWorkspaceEmailDomainSettingsOutput = {
  __typename?: 'CreateWorkspaceEmailDomainSettingsOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type CreateWorkspaceFileUploadUrlInput = {
  fileName: Scalars['String']['input'];
  fileSizeBytes: Scalars['Int']['input'];
  visibility: WorkspaceFileVisibility;
};

export type CreateWorkspaceFileUploadUrlOutput = {
  __typename?: 'CreateWorkspaceFileUploadUrlOutput';
  error?: Maybe<MutationError>;
  workspaceFileUploadUrl?: Maybe<WorkspaceFileUploadUrl>;
};

export type CreateWorkspaceInput = {
  name: Scalars['String']['input'];
  publicName: Scalars['String']['input'];
};

export type CreateWorkspaceMsTeamsIntegrationInput = {
  msTeamsTenantId: Scalars['ID']['input'];
};

export type CreateWorkspaceMsTeamsIntegrationOutput = {
  __typename?: 'CreateWorkspaceMSTeamsIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceMsTeamsIntegration>;
};

export type CreateWorkspaceOutput = {
  __typename?: 'CreateWorkspaceOutput';
  error?: Maybe<MutationError>;
  workspace?: Maybe<Workspace>;
};

export type CreateWorkspaceSlackChannelIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateWorkspaceSlackChannelIntegrationOutput = {
  __typename?: 'CreateWorkspaceSlackChannelIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackChannelIntegration>;
};

export type CreateWorkspaceSlackIntegrationInput = {
  authCode: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type CreateWorkspaceSlackIntegrationOutput = {
  __typename?: 'CreateWorkspaceSlackIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackIntegration>;
};

export type CsatCustomerSurveyTemplate = {
  __typename?: 'CsatCustomerSurveyTemplate';
  questionText: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CsatCustomerSurveyTemplateInput = {
  questionText: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export enum CurrencyCode {
  Usd = 'USD'
}

export type CustomEntry = {
  __typename?: 'CustomEntry';
  attachments: Array<Attachment>;
  components: Array<CustomTimelineEntryComponent>;
  externalId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type CustomTimelineEntryComponent = ComponentBadge | ComponentContainer | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type Customer = {
  __typename?: 'Customer';
  /** When the customer was assigned to a user. */
  assignedAt?: Maybe<DateTime>;
  /** The user the customer is assigned to. */
  assignedToUser?: Maybe<UserActor>;
  /** The avatar URL of the customer. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The company the customer belongs to. */
  company?: Maybe<Company>;
  createdAt: DateTime;
  createdBy: Actor;
  /** A subquery to fetch the customer's group memberships. */
  customerGroupMemberships: CustomerGroupMembershipConnection;
  /** The customer's email address. */
  email: EmailAddress;
  /** Your system's ID for this customer. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** The full name of the customer. */
  fullName: Scalars['String']['output'];
  /** Uniquely identifies a customer in Plain. */
  id: Scalars['ID']['output'];
  identities: Array<CustomerIdentity>;
  isAnonymous: Scalars['Boolean']['output'];
  /** @deprecated Use Thread.statusChangedAt instead */
  lastIdleAt?: Maybe<DateTime>;
  markedAsSpamAt?: Maybe<DateTime>;
  markedAsSpamBy?: Maybe<InternalActor>;
  /** An optional short name of the customer, typically their first name. */
  shortName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use Thread.status instead */
  status?: Maybe<CustomerStatus>;
  /** @deprecated Use Thread.statusChangedAt instead */
  statusChangedAt?: Maybe<DateTime>;
  /** A subquery to fetch the customer's tenants. */
  tenantMemberships: CustomerTenantMembershipConnection;
  updatedAt: DateTime;
  updatedBy: Actor;
};


/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type CustomerCustomerGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CustomerGroupMembershipsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type CustomerTenantMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CustomerActor = {
  __typename?: 'CustomerActor';
  customer: Customer;
  customerId: Scalars['ID']['output'];
};

export type CustomerCardComponent = ComponentBadge | ComponentContainer | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

/**
 * The configuration of a customer card that defines four important things:
 *
 * - The title of the card
 * - The key of the card, which will be used in the request payload to the API URL
 * - The order in which the cards should appear
 * - Which API the card should be loaded from (and the required authentication headers)
 *
 * Configs that have the same API URL and API Headers will be loaded in batch. API header names are treated case insensitively.
 *
 * A maximum of 25 customer cards can be configured.
 */
export type CustomerCardConfig = {
  __typename?: 'CustomerCardConfig';
  /** An array of headers name-value pairs (maximum length of array: 20). Requires the `customerCardConfigApiDetails:read` permission. */
  apiHeaders: Array<CustomerCardConfigApiHeader>;
  /** The URL from which this card should be loaded (must start with `https://` and be a valid URL, max length: 600 characters). Requires the `customerCardConfigApiDetails:read` permission. */
  apiUrl: Scalars['String']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  /** The default time the card should be cached for if no TTL is provided in the card response. (minimum: 15 seconds, maximum: 1 year or  31,536,000 seconds). */
  defaultTimeToLiveSeconds: Scalars['Int']['output'];
  /** The ID of the customer card config. */
  id: Scalars['ID']['output'];
  /** Indicates if the customer card is enabled or not. Disabled customer card configs are not loaded or displayed for customers. */
  isEnabled: Scalars['Boolean']['output'];
  /** The key of the card (must be unique in a workspace, max length: 500 characters, must match regex: `[a-zA-Z0-9_-]+`). */
  key: Scalars['String']['output'];
  /**
   * The order in which this customer card config should be shown.
   *
   * Duplicate order numbers are allowed, in case the order is the same they will be sorted based on `id`. The minimum is 0 and the maximum is 100000.
   */
  order: Scalars['Int']['output'];
  /** The title of the card (max length: 500 characters). */
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** An API header that will be sent to the configured API URL. */
export type CustomerCardConfigApiHeader = {
  __typename?: 'CustomerCardConfigApiHeader';
  /** The name of the header, trimmed and treated case insensitively for deduplication purposes (min length: 1, max length: 100). Not all header names are allowed. */
  name: Scalars['String']['output'];
  /** The value of the header, treated case sensitively for deduplication purposes (min length: 1, max length: 500). */
  value: Scalars['String']['output'];
};

/** An API header that will be sent to the configured API URL. */
export type CustomerCardConfigApiHeaderInput = {
  /** The name of the header, trimmed and treated case insensitively for deduplication purposes (min length: 1, max length: 100). Not all header names are allowed. */
  name: Scalars['String']['input'];
  /** The value of the header, treated case sensitively for deduplication purposes (min length: 1, max length: 500). */
  value: Scalars['String']['input'];
};

export type CustomerCardConfigOrderInput = {
  /** The ID of the customer card config to be reordered. */
  customerCardConfigId: Scalars['ID']['input'];
  /** The order the customer card config should have. */
  order: Scalars['Int']['input'];
};

/**
 * A shared interface for all common properties customer card instances can have.
 * A customer can only have one customer card instance for each customer card config at any point in time.
 *
 * Has 3 implementations:
 * - `CustomerCardInstanceLoading`
 * - `CustomerCardInstanceLoaded`
 * - `CustomerCardInstanceError`
 */
export type CustomerCardInstance = {
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID']['output'];
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID']['output'];
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type CustomerCardInstanceChange = {
  __typename?: 'CustomerCardInstanceChange';
  changeType: ChangeType;
  customerCardInstance: CustomerCardInstance;
};

export type CustomerCardInstanceChangesResult = CustomerCardInstanceChange | SubscriptionAcknowledgement;

export type CustomerCardInstanceError = CustomerCardInstance & {
  __typename?: 'CustomerCardInstanceError';
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID']['output'];
  /** The details of the customer card load error. */
  errorDetail: CustomerCardInstanceErrorDetail;
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID']['output'];
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

/** Details for the reasons why the customer card failed to load. */
export type CustomerCardInstanceErrorDetail = CustomerCardInstanceMissingCardErrorDetail | CustomerCardInstanceRequestErrorDetail | CustomerCardInstanceResponseBodyErrorDetail | CustomerCardInstanceStatusCodeErrorDetail | CustomerCardInstanceTimeoutErrorDetail | CustomerCardInstanceUnknownErrorDetail;

/** A loaded customer card. */
export type CustomerCardInstanceLoaded = CustomerCardInstance & {
  __typename?: 'CustomerCardInstanceLoaded';
  /** The list of components of the customer card. If this is null it means the customer card was returned on the API, but the components array was empty. */
  components?: Maybe<Array<CustomerCardComponent>>;
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID']['output'];
  expiresAt: DateTime;
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID']['output'];
  /** When the customer card was received from the API. */
  loadedAt: DateTime;
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

/**
 * A loading customer card. The createdAt timestamp indicates when the load was started.
 * Will be updated to be a CustomerCardInstanceLoaded or CustomerCardInstanceError.
 */
export type CustomerCardInstanceLoading = CustomerCardInstance & {
  __typename?: 'CustomerCardInstanceLoading';
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID']['output'];
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID']['output'];
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

/** The configured API URL didn't return a requested card key. */
export type CustomerCardInstanceMissingCardErrorDetail = {
  __typename?: 'CustomerCardInstanceMissingCardErrorDetail';
  cardKey: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Plain failed to make the request to the configured API URL. */
export type CustomerCardInstanceRequestErrorDetail = {
  __typename?: 'CustomerCardInstanceRequestErrorDetail';
  errorCode: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** An invalid response body was returned from the configured API URL. */
export type CustomerCardInstanceResponseBodyErrorDetail = {
  __typename?: 'CustomerCardInstanceResponseBodyErrorDetail';
  message: Scalars['String']['output'];
  responseBody: Scalars['String']['output'];
};

/** A non-200 status code was returned from the configured API URL. */
export type CustomerCardInstanceStatusCodeErrorDetail = {
  __typename?: 'CustomerCardInstanceStatusCodeErrorDetail';
  message: Scalars['String']['output'];
  responseBody: Scalars['String']['output'];
  statusCode: Scalars['Int']['output'];
};

/** The card failed to load within the timeout. */
export type CustomerCardInstanceTimeoutErrorDetail = {
  __typename?: 'CustomerCardInstanceTimeoutErrorDetail';
  message: Scalars['String']['output'];
  timeoutSeconds: Scalars['Int']['output'];
};

/** An unknown error occurred. If this error is persistent, please contact our support. */
export type CustomerCardInstanceUnknownErrorDetail = {
  __typename?: 'CustomerCardInstanceUnknownErrorDetail';
  message: Scalars['String']['output'];
};

export type CustomerChange = {
  __typename?: 'CustomerChange';
  changeType: ChangeType;
  customer: Customer;
};

export type CustomerChangesFilter = {
  assignedToUser?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  edges: Array<CustomerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  cursor: Scalars['String']['output'];
  node: Customer;
};

export type CustomerEmailActor = {
  __typename?: 'CustomerEmailActor';
  customer: Customer;
  customerId: Scalars['ID']['output'];
};

export type CustomerEvent = {
  __typename?: 'CustomerEvent';
  /** The list of components of the event. */
  components: Array<EventComponent>;
  /** The datetime when this event was created. */
  createdAt: DateTime;
  /** The actor who created this event. */
  createdBy: Actor;
  /** The customer that this event belongs to. */
  customerId: Scalars['ID']['output'];
  /** The ID of the event. */
  id: Scalars['ID']['output'];
  /** The title of the event. */
  title: Scalars['String']['output'];
  /** The datetime when this event was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this event. */
  updatedBy: Actor;
};

export type CustomerEventEntry = TimelineEventEntry & {
  __typename?: 'CustomerEventEntry';
  components: Array<EventComponent>;
  customerId: Scalars['ID']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  timelineEventId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type CustomerGroup = {
  __typename?: 'CustomerGroup';
  color: Scalars['String']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerGroupConnection = {
  __typename?: 'CustomerGroupConnection';
  edges: Array<CustomerGroupEdge>;
  pageInfo: PageInfo;
};

export type CustomerGroupEdge = {
  __typename?: 'CustomerGroupEdge';
  cursor: Scalars['String']['output'];
  node: CustomerGroup;
};

export type CustomerGroupIdentifier = {
  customerGroupId?: InputMaybe<Scalars['ID']['input']>;
  customerGroupKey?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerGroupMembership = {
  __typename?: 'CustomerGroupMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  customerGroup: CustomerGroup;
  customerId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerGroupMembershipConnection = {
  __typename?: 'CustomerGroupMembershipConnection';
  edges: Array<CustomerGroupMembershipEdge>;
  pageInfo: PageInfo;
};

export type CustomerGroupMembershipEdge = {
  __typename?: 'CustomerGroupMembershipEdge';
  cursor: Scalars['String']['output'];
  node: CustomerGroupMembership;
};

export type CustomerGroupMembershipsFilter = {
  customerGroupExternalIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CustomerGroupsFilter = {
  externalIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Only one of the fields can be set. */
export type CustomerIdentifierInput = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['ID']['input']>;
};

export type CustomerIdentity = DiscordCustomerIdentity | EmailCustomerIdentity | SlackCustomerIdentity;

export type CustomerImpersonationInput = {
  customerIdentifier: CustomerIdentifierInput;
};

/**
 * The customer attributes available for search, each of them mapped to a search expression.
 * Exactly one of them must be provided in a single search condition.
 */
export type CustomerSearchCondition = {
  /** Search expression on the customer's email address. */
  email?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's external id. */
  externalId?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's full name. */
  fullName?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's short name. */
  shortName?: InputMaybe<StringSearchExpression>;
  /**
   * Search expression on specific timeline entries' text (email, chat) sent or received by the customer.
   * Common English stop-words will be removed from the text to search.
   */
  timelineEntryText?: InputMaybe<StringSearchExpression>;
};

export type CustomerSearchConnection = {
  __typename?: 'CustomerSearchConnection';
  edges: Array<CustomerSearchEdge>;
  pageInfo: PageInfo;
};

export type CustomerSearchEdge = {
  __typename?: 'CustomerSearchEdge';
  cursor: Scalars['String']['output'];
  node: Customer;
};

export enum CustomerStatus {
  /** @deprecated Use ThreadStatus.TODO instead */
  Active = 'ACTIVE',
  /** @deprecated Use ThreadStatus.DONE instead */
  Idle = 'IDLE',
  /** @deprecated Use ThreadStatus.SNOOZED instead */
  Snoozed = 'SNOOZED'
}

export type CustomerSurvey = {
  __typename?: 'CustomerSurvey';
  conditions: Array<CustomerSurveyCondition>;
  createdAt: DateTime;
  createdBy: InternalActor;
  customerIntervalDays: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  responseDelayMinutes: Scalars['Int']['output'];
  template: CustomerSurveyTemplate;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerSurveyCondition = CustomerSurveyLabelCondition | CustomerSurveyMessageSourceCondition | CustomerSurveyPrioritiesCondition | CustomerSurveySupportEmailsCondition | CustomerSurveyTiersCondition;

export type CustomerSurveyConditionInput = {
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  messageSource?: InputMaybe<Array<MessageSource>>;
  priorities?: InputMaybe<Array<Scalars['Int']['input']>>;
  supportEmailAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  tierIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CustomerSurveyConnection = {
  __typename?: 'CustomerSurveyConnection';
  edges: Array<CustomerSurveyEdge>;
  pageInfo: PageInfo;
};

export type CustomerSurveyEdge = {
  __typename?: 'CustomerSurveyEdge';
  cursor: Scalars['String']['output'];
  node: CustomerSurvey;
};

export type CustomerSurveyLabelCondition = {
  __typename?: 'CustomerSurveyLabelCondition';
  labelTypeIds: Array<Scalars['ID']['output']>;
};

export type CustomerSurveyMessageSourceCondition = {
  __typename?: 'CustomerSurveyMessageSourceCondition';
  messageSource: Array<MessageSource>;
};

export type CustomerSurveyOrderInput = {
  customerSurveyId: Scalars['ID']['input'];
  order: Scalars['Int']['input'];
};

export type CustomerSurveyPrioritiesCondition = {
  __typename?: 'CustomerSurveyPrioritiesCondition';
  priorities: Array<Scalars['Int']['output']>;
};

export type CustomerSurveySupportEmailsCondition = {
  __typename?: 'CustomerSurveySupportEmailsCondition';
  supportEmailAddresses: Array<Scalars['String']['output']>;
};

export type CustomerSurveyTemplate = CsatCustomerSurveyTemplate;

export type CustomerSurveyTemplateInput = {
  csatTemplate?: InputMaybe<CsatCustomerSurveyTemplateInput>;
};

export type CustomerSurveyTiersCondition = {
  __typename?: 'CustomerSurveyTiersCondition';
  tierIds: Array<Scalars['ID']['output']>;
};

export type CustomerTenantMembership = {
  __typename?: 'CustomerTenantMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  tenant: Tenant;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerTenantMembershipConnection = {
  __typename?: 'CustomerTenantMembershipConnection';
  edges: Array<CustomerTenantMembershipEdge>;
  pageInfo: PageInfo;
};

export type CustomerTenantMembershipEdge = {
  __typename?: 'CustomerTenantMembershipEdge';
  cursor: Scalars['String']['output'];
  node: CustomerTenantMembership;
};

export type CustomersFilter = {
  /**
   * Filters customers to those belonging to the given companies.
   * Customers who dont belong to any of the given companies will not be included.
   * Can be combined with other company filters.
   */
  companyIdentifiers?: InputMaybe<Array<CompanyIdentifierInput>>;
  /**
   * Filters customers to those with at least one of the given customer group IDs.
   * Customers with no groups will not be included.
   * Can be combined with other group filters.
   */
  customerGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Filters customers to those with at least one of the given customer group keys.
   * Customers with no groups will not be included.
   * Can be combined with other group filters.
   */
  customerGroupKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  isMarkedAsSpam?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Filters customers to those belonging to the given tenants.
   * Customers who dont belong to any of the given tenants will not be included.
   * Can be combined with other company filters.
   */
  tenantIdentifiers?: InputMaybe<Array<TenantIdentifierInput>>;
};

/**
 * A query to search for customers. Search queries are combinations of search conditions, as defined
 * below. At least one search condition must be provided.
 */
export type CustomersSearchQuery = {
  /** An array of search conditions that will be combined using a 'logical OR' to search for customers. */
  or?: InputMaybe<Array<CustomerSearchCondition>>;
};

export type CustomersSort = {
  direction: SortDirection;
  field: CustomersSortField;
};

export enum CustomersSortField {
  FullName = 'FULL_NAME'
}

export type DateTime = {
  __typename?: 'DateTime';
  iso8601: Scalars['String']['output'];
  unixTimestamp: Scalars['String']['output'];
};

export type DatetimeFilter = {
  /** Timestamps -greater or equal- than this value. ISO 8601 format (e.g. 2024-10-28T18:30:00Z). */
  after?: InputMaybe<Scalars['String']['input']>;
  /** Timestamps -less- than this value. ISO 8601 format (e.g. 2024-10-28T18:30:00Z). */
  before?: InputMaybe<Scalars['String']['input']>;
};

export type DefaultServiceIntegration = ServiceIntegration & {
  __typename?: 'DefaultServiceIntegration';
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type DeleteApiKeyInput = {
  apiKeyId: Scalars['ID']['input'];
};

export type DeleteApiKeyOutput = {
  __typename?: 'DeleteApiKeyOutput';
  apiKey?: Maybe<ApiKey>;
  error?: Maybe<MutationError>;
};

export type DeleteAutoresponderInput = {
  autoresponderId: Scalars['ID']['input'];
};

export type DeleteAutoresponderOutput = {
  __typename?: 'DeleteAutoresponderOutput';
  autoresponder?: Maybe<Autoresponder>;
  error?: Maybe<MutationError>;
};

export type DeleteBusinessHoursOutput = {
  __typename?: 'DeleteBusinessHoursOutput';
  error?: Maybe<MutationError>;
};

export type DeleteChatAppInput = {
  chatAppId: Scalars['ID']['input'];
};

export type DeleteChatAppOutput = {
  __typename?: 'DeleteChatAppOutput';
  error?: Maybe<MutationError>;
};

export type DeleteChatAppSecretInput = {
  chatAppId: Scalars['ID']['input'];
};

export type DeleteChatAppSecretOutput = {
  __typename?: 'DeleteChatAppSecretOutput';
  error?: Maybe<MutationError>;
};

export type DeleteCompanyInput = {
  companyIdentifier: CompanyIdentifierInput;
};

export type DeleteCompanyOutput = {
  __typename?: 'DeleteCompanyOutput';
  company?: Maybe<Company>;
  error?: Maybe<MutationError>;
};

export type DeleteCustomerCardConfigInput = {
  /** The customer card config ID to delete. */
  customerCardConfigId: Scalars['ID']['input'];
};

export type DeleteCustomerCardConfigOutput = {
  __typename?: 'DeleteCustomerCardConfigOutput';
  error?: Maybe<MutationError>;
};

export type DeleteCustomerGroupInput = {
  customerGroupId: Scalars['ID']['input'];
};

export type DeleteCustomerGroupOutput = {
  __typename?: 'DeleteCustomerGroupOutput';
  error?: Maybe<MutationError>;
};

export type DeleteCustomerInput = {
  customerId: Scalars['ID']['input'];
};

export type DeleteCustomerOutput = {
  __typename?: 'DeleteCustomerOutput';
  error?: Maybe<MutationError>;
};

export type DeleteCustomerSurveyInput = {
  customerSurveyId: Scalars['ID']['input'];
};

export type DeleteCustomerSurveyOutput = {
  __typename?: 'DeleteCustomerSurveyOutput';
  error?: Maybe<MutationError>;
};

export type DeleteEscalationPathInput = {
  escalationPathId: Scalars['ID']['input'];
};

export type DeleteEscalationPathOutput = {
  __typename?: 'DeleteEscalationPathOutput';
  error?: Maybe<MutationError>;
};

export type DeleteHelpCenterArticleGroupInput = {
  helpCenterArticleGroupId: Scalars['ID']['input'];
};

export type DeleteHelpCenterArticleGroupOutput = {
  __typename?: 'DeleteHelpCenterArticleGroupOutput';
  error?: Maybe<MutationError>;
};

export type DeleteHelpCenterArticleInput = {
  helpCenterArticleId: Scalars['ID']['input'];
};

export type DeleteHelpCenterArticleOutput = {
  __typename?: 'DeleteHelpCenterArticleOutput';
  error?: Maybe<MutationError>;
};

export type DeleteHelpCenterInput = {
  helpCenterId: Scalars['ID']['input'];
};

export type DeleteHelpCenterOutput = {
  __typename?: 'DeleteHelpCenterOutput';
  error?: Maybe<MutationError>;
};

export type DeleteKnowledgeSourceInput = {
  knowledgeSourceId: Scalars['ID']['input'];
};

export type DeleteKnowledgeSourceOutput = {
  __typename?: 'DeleteKnowledgeSourceOutput';
  error?: Maybe<MutationError>;
};

export type DeleteMachineUserInput = {
  machineUserId: Scalars['ID']['input'];
};

export type DeleteMachineUserOutput = {
  __typename?: 'DeleteMachineUserOutput';
  error?: Maybe<MutationError>;
  machineUser?: Maybe<MachineUser>;
};

export type DeleteMyFavoritePageInput = {
  favoritePageId: Scalars['ID']['input'];
};

export type DeleteMyFavoritePageOutput = {
  __typename?: 'DeleteMyFavoritePageOutput';
  error?: Maybe<MutationError>;
};

export type DeleteMyLinearIntegrationOutput = {
  __typename?: 'DeleteMyLinearIntegrationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteMyMsTeamsIntegrationOutput = {
  __typename?: 'DeleteMyMSTeamsIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<UserMsTeamsIntegration>;
};

export type DeleteMyServiceAuthorizationInput = {
  serviceAuthorizationId: Scalars['ID']['input'];
};

export type DeleteMyServiceAuthorizationOutput = {
  __typename?: 'DeleteMyServiceAuthorizationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteMySlackIntegrationOutput = {
  __typename?: 'DeleteMySlackIntegrationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteNoteInput = {
  noteId: Scalars['ID']['input'];
};

export type DeleteNoteOutput = {
  __typename?: 'DeleteNoteOutput';
  error?: Maybe<MutationError>;
  note?: Maybe<Note>;
};

export type DeleteSavedThreadsViewInput = {
  savedThreadsViewId: Scalars['ID']['input'];
};

export type DeleteSavedThreadsViewOutput = {
  __typename?: 'DeleteSavedThreadsViewOutput';
  error?: Maybe<MutationError>;
};

export type DeleteServiceAuthorizationInput = {
  serviceAuthorizationId: Scalars['ID']['input'];
};

export type DeleteServiceAuthorizationOutput = {
  __typename?: 'DeleteServiceAuthorizationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteServiceLevelAgreementInput = {
  serviceLevelAgreementId: Scalars['ID']['input'];
};

export type DeleteServiceLevelAgreementOutput = {
  __typename?: 'DeleteServiceLevelAgreementOutput';
  error?: Maybe<MutationError>;
  serviceLevelAgreement?: Maybe<ServiceLevelAgreement>;
};

export type DeleteSnippetInput = {
  snippetId: Scalars['ID']['input'];
};

export type DeleteSnippetOutput = {
  __typename?: 'DeleteSnippetOutput';
  error?: Maybe<MutationError>;
  snippet?: Maybe<Snippet>;
};

export type DeleteTenantFieldInput = {
  tenantFieldId: Scalars['ID']['input'];
};

export type DeleteTenantFieldOutput = {
  __typename?: 'DeleteTenantFieldOutput';
  error?: Maybe<MutationError>;
  tenantField?: Maybe<TenantField>;
};

export type DeleteTenantFieldSchemaInput = {
  tenantFieldSchemaId: Scalars['ID']['input'];
};

export type DeleteTenantFieldSchemaOutput = {
  __typename?: 'DeleteTenantFieldSchemaOutput';
  error?: Maybe<MutationError>;
  tenantFieldSchema?: Maybe<TenantFieldSchema>;
};

export type DeleteTenantInput = {
  tenantIdentifier: TenantIdentifierInput;
};

export type DeleteTenantOutput = {
  __typename?: 'DeleteTenantOutput';
  error?: Maybe<MutationError>;
  tenant?: Maybe<Tenant>;
};

export type DeleteThreadChannelAssociationInput = {
  threadChannelAssociationId: Scalars['ID']['input'];
};

export type DeleteThreadChannelAssociationOutput = {
  __typename?: 'DeleteThreadChannelAssociationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteThreadFieldIdentifier = {
  key: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};

export type DeleteThreadFieldInput = {
  identifier: DeleteThreadFieldIdentifier;
};

export type DeleteThreadFieldOutput = {
  __typename?: 'DeleteThreadFieldOutput';
  error?: Maybe<MutationError>;
};

export type DeleteThreadFieldSchemaInput = {
  threadFieldSchemaId: Scalars['ID']['input'];
};

export type DeleteThreadFieldSchemaOutput = {
  __typename?: 'DeleteThreadFieldSchemaOutput';
  error?: Maybe<MutationError>;
};

export type DeleteThreadLinkInput = {
  threadLinkId: Scalars['ID']['input'];
};

export type DeleteThreadLinkOutput = {
  __typename?: 'DeleteThreadLinkOutput';
  error?: Maybe<MutationError>;
};

export type DeleteTierInput = {
  tierId: Scalars['ID']['input'];
};

export type DeleteTierOutput = {
  __typename?: 'DeleteTierOutput';
  error?: Maybe<MutationError>;
  tier?: Maybe<Tier>;
};

export type DeleteUserAuthDiscordChannelIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteUserAuthDiscordChannelIntegrationOutput = {
  __typename?: 'DeleteUserAuthDiscordChannelIntegrationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteUserAuthSlackIntegrationInput = {
  slackTeamId: Scalars['String']['input'];
};

export type DeleteUserAuthSlackIntegrationOutput = {
  __typename?: 'DeleteUserAuthSlackIntegrationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteUserInput = {
  userId: Scalars['ID']['input'];
};

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWebhookTargetInput = {
  webhookTargetId: Scalars['ID']['input'];
};

export type DeleteWebhookTargetOutput = {
  __typename?: 'DeleteWebhookTargetOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWorkflowRuleInput = {
  workflowRuleId: Scalars['ID']['input'];
};

export type DeleteWorkflowRuleOutput = {
  __typename?: 'DeleteWorkflowRuleOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWorkspaceDiscordChannelIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceDiscordChannelIntegrationOutput = {
  __typename?: 'DeleteWorkspaceDiscordChannelIntegrationOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWorkspaceDiscordIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceDiscordIntegrationOutput = {
  __typename?: 'DeleteWorkspaceDiscordIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceDiscordIntegration>;
};

export type DeleteWorkspaceEmailDomainSettingsOutput = {
  __typename?: 'DeleteWorkspaceEmailDomainSettingsOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWorkspaceFileInput = {
  workspaceFileId: Scalars['ID']['input'];
};

export type DeleteWorkspaceFileOutput = {
  __typename?: 'DeleteWorkspaceFileOutput';
  error?: Maybe<MutationError>;
};

export type DeleteWorkspaceInviteInput = {
  inviteId: Scalars['ID']['input'];
};

export type DeleteWorkspaceInviteOutput = {
  __typename?: 'DeleteWorkspaceInviteOutput';
  error?: Maybe<MutationError>;
  invite?: Maybe<WorkspaceInvite>;
};

export type DeleteWorkspaceMsTeamsIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceMsTeamsIntegrationOutput = {
  __typename?: 'DeleteWorkspaceMSTeamsIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceMsTeamsIntegration>;
};

export type DeleteWorkspaceSlackChannelIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceSlackChannelIntegrationOutput = {
  __typename?: 'DeleteWorkspaceSlackChannelIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackChannelIntegration>;
};

export type DeleteWorkspaceSlackIntegrationInput = {
  integrationId: Scalars['ID']['input'];
};

export type DeleteWorkspaceSlackIntegrationOutput = {
  __typename?: 'DeleteWorkspaceSlackIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackIntegration>;
};

export type DeletedCustomerActor = {
  __typename?: 'DeletedCustomerActor';
  customerId: Scalars['ID']['output'];
};

export type DeletedCustomerEmailActor = {
  __typename?: 'DeletedCustomerEmailActor';
  customerId: Scalars['ID']['output'];
};

export type DependsOnLabelType = {
  __typename?: 'DependsOnLabelType';
  labelTypeId: Scalars['ID']['output'];
};

export type DependsOnThreadFieldInput = {
  threadFieldSchemaId: Scalars['ID']['input'];
  threadFieldSchemaValue: Scalars['String']['input'];
};

export type DependsOnThreadFieldType = {
  __typename?: 'DependsOnThreadFieldType';
  threadFieldSchemaId: Scalars['ID']['output'];
  threadFieldSchemaValue: Scalars['String']['output'];
};

export type DiscordCustomerIdentity = {
  __typename?: 'DiscordCustomerIdentity';
  discordUserId: Scalars['String']['output'];
};

export type DiscordMessage = {
  __typename?: 'DiscordMessage';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  deletedOnDiscordAt?: Maybe<DateTime>;
  discordMessageId: Scalars['ID']['output'];
  discordMessageLink: Scalars['String']['output'];
  lastEditedOnDiscordAt?: Maybe<DateTime>;
  markdownContent?: Maybe<Scalars['String']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type DiscordMessageEntry = {
  __typename?: 'DiscordMessageEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID']['output'];
  deletedOnDiscordAt?: Maybe<DateTime>;
  discordMessageId: Scalars['ID']['output'];
  discordMessageLink: Scalars['String']['output'];
  lastEditedOnDiscordAt?: Maybe<DateTime>;
  markdownContent?: Maybe<Scalars['String']['output']>;
};

export type DiscordThreadChannelDetails = {
  __typename?: 'DiscordThreadChannelDetails';
  discordChannelId: Scalars['String']['output'];
  discordChannelName?: Maybe<Scalars['String']['output']>;
  discordGuildId: Scalars['String']['output'];
};

export type DnsRecord = {
  __typename?: 'DnsRecord';
  isVerified: Scalars['Boolean']['output'];
  lastCheckedAt?: Maybe<DateTime>;
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value: Scalars['String']['output'];
  verifiedAt?: Maybe<DateTime>;
};

export enum DoneStatusDetail {
  DoneAutomaticallySet = 'DONE_AUTOMATICALLY_SET',
  DoneManuallySet = 'DONE_MANUALLY_SET',
  Ignored = 'IGNORED',
  /** @deprecated Use DONE_AUTOMATICALLY_SET instead. */
  TimerExpired = 'TIMER_EXPIRED'
}

export type Email = {
  __typename?: 'Email';
  additionalRecipients: Array<EmailParticipant>;
  attachments: Array<Attachment>;
  category: EmailCategory;
  createdAt: DateTime;
  createdBy: Actor;
  customer: Customer;
  from: EmailParticipant;
  hiddenRecipients: Array<EmailParticipant>;
  id: Scalars['ID']['output'];
  inReplyToEmailId?: Maybe<Scalars['ID']['output']>;
  markdownContent?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  textContent?: Maybe<Scalars['String']['output']>;
  thread?: Maybe<Thread>;
  to: EmailParticipant;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type EmailActor = CustomerEmailActor | DeletedCustomerEmailActor | SupportEmailAddressEmailActor | UserEmailActor;

/** An object modelling an email address and if it's been verified. */
export type EmailAddress = {
  __typename?: 'EmailAddress';
  /** The email address. */
  email: Scalars['String']['output'];
  /** If the email address ownership has been verified (e.g. via sending an email with a code). If the email is not verified, Plain may not email this address. */
  isVerified: Scalars['Boolean']['output'];
  /** When the email became verified in Plain. */
  verifiedAt?: Maybe<DateTime>;
};

export type EmailAddressInput = {
  email: Scalars['String']['input'];
  isVerified: Scalars['Boolean']['input'];
};

export enum EmailAuthenticity {
  Fail = 'FAIL',
  Pass = 'PASS',
  Unknown = 'UNKNOWN'
}

export type EmailBounce = {
  __typename?: 'EmailBounce';
  bouncedAt: DateTime;
  isSendRetriable: Scalars['Boolean']['output'];
  recipient: EmailParticipant;
};

export enum EmailCategory {
  CustomerSurvey = 'CUSTOMER_SURVEY',
  Messaging = 'MESSAGING',
  UnreadChatMessages = 'UNREAD_CHAT_MESSAGES'
}

export type EmailCustomerIdentity = {
  __typename?: 'EmailCustomerIdentity';
  email: Scalars['String']['output'];
};

export type EmailEntry = {
  __typename?: 'EmailEntry';
  additionalRecipients: Array<EmailParticipant>;
  /** All the attachments included in this email. */
  attachments: Array<Attachment>;
  authenticity: EmailAuthenticity;
  /** If any of the recipients bounces the email, this will contain the list of bounces. */
  bounces: Array<EmailBounce>;
  /** The category of the email. */
  category: EmailCategory;
  emailId: Scalars['ID']['output'];
  from: EmailParticipant;
  /** The full email's markdown content, including all replies. */
  fullMarkdownContent?: Maybe<Scalars['String']['output']>;
  /** The full email's text content, including all replies. */
  fullTextContent?: Maybe<Scalars['String']['output']>;
  /** Boolean indicating whether there is more markdown content available that can be resolved via the `fullMarkdownContent` field. */
  hasMoreMarkdownContent: Scalars['Boolean']['output'];
  /** Boolean indicating whether there is more text content available that can be resolved via the `fullTextContent` field. */
  hasMoreTextContent: Scalars['Boolean']['output'];
  hiddenRecipients: Array<EmailParticipant>;
  /** Whether this email entry is the start of a new thread in Plain. Can be used to show the full email content. */
  isStartOfThread: Scalars['Boolean']['output'];
  /** The most recent email's markdown content. */
  markdownContent?: Maybe<Scalars['String']['output']>;
  /** When the email was received by Plain. */
  receivedAt?: Maybe<DateTime>;
  /** Informs whether the email was sent successfully, bounced or failed. If the email is still being sent, the status will be 'PENDING'. Only set for outbound emails. */
  sendStatus?: Maybe<EmailSendStatus>;
  /** When the email was sent. Only set for outbound emails and will be null until the email is sent. */
  sentAt?: Maybe<DateTime>;
  subject?: Maybe<Scalars['String']['output']>;
  /** The most recent email's text content. */
  textContent?: Maybe<Scalars['String']['output']>;
  to: EmailParticipant;
};

export type EmailParticipant = {
  __typename?: 'EmailParticipant';
  email: Scalars['String']['output'];
  emailActor?: Maybe<EmailActor>;
  name?: Maybe<Scalars['String']['output']>;
};

export type EmailParticipantInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type EmailPreviewUrl = {
  __typename?: 'EmailPreviewUrl';
  expiresAt: DateTime;
  previewUrl: Scalars['String']['output'];
};

export enum EmailSendStatus {
  /** Some (or all) of the recipients bounced the email, meaning they did not recieve it. Check 'bounces' for more details on which recipients bounced. */
  Bounced = 'BOUNCED',
  /** The email failed to send. This will happen if the main recipient (To) bounced the email, or if there was an unexpected error sending the email. */
  Failed = 'FAILED',
  /** The email is being sent. */
  Pending = 'PENDING',
  /** The email was sent successfully to all recipients. */
  Sent = 'SENT'
}

export type EmailSignature = {
  __typename?: 'EmailSignature';
  createdAt: DateTime;
  createdBy: InternalActor;
  markdown?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** A union of all possible entries that can appear in a timeline. */
export type Entry = ChatEntry | CustomEntry | CustomerEventEntry | DiscordMessageEntry | EmailEntry | HelpCenterAiConversationMessageEntry | LinearIssueThreadLinkStateTransitionedEntry | MsTeamsMessageEntry | NoteEntry | ServiceLevelAgreementStatusTransitionedEntry | SlackMessageEntry | SlackReplyEntry | ThreadAdditionalAssigneesTransitionedEntry | ThreadAssignmentTransitionedEntry | ThreadDiscussionEntry | ThreadDiscussionResolvedEntry | ThreadEventEntry | ThreadLabelsChangedEntry | ThreadLinkUpdatedEntry | ThreadPriorityChangedEntry | ThreadStatusTransitionedEntry;

export type EscalateThreadInput = {
  threadId: Scalars['ID']['input'];
};

export type EscalateThreadOutput = {
  __typename?: 'EscalateThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type EscalationPath = {
  __typename?: 'EscalationPath';
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  steps: Array<EscalationPathStep>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type EscalationPathConnection = {
  __typename?: 'EscalationPathConnection';
  edges: Array<EscalationPathEdge>;
  pageInfo: PageInfo;
};

export type EscalationPathEdge = {
  __typename?: 'EscalationPathEdge';
  cursor: Scalars['String']['output'];
  node: EscalationPath;
};

export type EscalationPathStep = EscalationPathStepLabelType | EscalationPathStepUser;

export type EscalationPathStepInput = {
  labelTypeId?: InputMaybe<Scalars['ID']['input']>;
  type: EscalationPathStepType;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type EscalationPathStepLabelType = {
  __typename?: 'EscalationPathStepLabelType';
  id: Scalars['ID']['output'];
  labelType: LabelType;
};

export enum EscalationPathStepType {
  LabelType = 'LABEL_TYPE',
  User = 'USER'
}

export type EscalationPathStepUser = {
  __typename?: 'EscalationPathStepUser';
  id: Scalars['ID']['output'];
  user: User;
};

export type EventComponent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

export type EventComponentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type FavoritePage = {
  __typename?: 'FavoritePage';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type FavoritePageConnection = {
  __typename?: 'FavoritePageConnection';
  edges: Array<FavoritePageEdge>;
  pageInfo: PageInfo;
};

export type FavoritePageEdge = {
  __typename?: 'FavoritePageEdge';
  cursor: Scalars['String']['output'];
  node: FavoritePage;
};

export enum FeatureKey {
  AiSuggestedResponses = 'AI_SUGGESTED_RESPONSES',
  BillingRotaSeats = 'BILLING_ROTA_SEATS',
  BusinessHours = 'BUSINESS_HOURS',
  ConnectedCustomerSlackChannels = 'CONNECTED_CUSTOMER_SLACK_CHANNELS',
  ConnectedSupportEmailAddresses = 'CONNECTED_SUPPORT_EMAIL_ADDRESSES',
  CustomerSurveys = 'CUSTOMER_SURVEYS',
  DataImporters = 'DATA_IMPORTERS',
  DiscordIntegration = 'DISCORD_INTEGRATION',
  EscalationPaths = 'ESCALATION_PATHS',
  HelpCenter = 'HELP_CENTER',
  InsightsLookbackDays = 'INSIGHTS_LOOKBACK_DAYS',
  LiveChat = 'LIVE_CHAT',
  MoreActiveEngRotaSeats = 'MORE_ACTIVE_ENG_ROTA_SEATS',
  MsTeamsIntegration = 'MS_TEAMS_INTEGRATION',
  ServiceLevelAgreements = 'SERVICE_LEVEL_AGREEMENTS',
  SlackDiscussions = 'SLACK_DISCUSSIONS',
  TeamReporting = 'TEAM_REPORTING',
  WorkflowRules = 'WORKFLOW_RULES'
}

export type FileSize = {
  __typename?: 'FileSize';
  bytes: Scalars['Int']['output'];
  kiloBytes: Scalars['Float']['output'];
  megaBytes: Scalars['Float']['output'];
};

export type FirstResponseTimeServiceLevelAgreement = ServiceLevelAgreement & {
  __typename?: 'FirstResponseTimeServiceLevelAgreement';
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  /** This SLA will breach if it does not receive a first response within this many minutes. */
  firstResponseTimeMinutes: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  threadLabelTypeIdFilter?: Maybe<ServiceLevelAgreementThreadLabelTypeIdFilter>;
  threadPriorityFilter: Array<Scalars['Int']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  useBusinessHoursOnly: Scalars['Boolean']['output'];
};

export type ForkThreadInput = {
  threadId: Scalars['ID']['input'];
  timelineEntryId: Scalars['ID']['input'];
};

export type ForkThreadOutput = {
  __typename?: 'ForkThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type GenerateHelpCenterArticleInput = {
  helpCenterId: Scalars['ID']['input'];
  threadId: Scalars['ID']['input'];
};

export type GenerateHelpCenterArticleOutput = {
  __typename?: 'GenerateHelpCenterArticleOutput';
  error?: Maybe<MutationError>;
  helpCenterArticles: Array<HelpCenterArticle>;
};

export type GenerateReplyOption = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type GeneratedReply = {
  __typename?: 'GeneratedReply';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  markdown: Scalars['String']['output'];
  /** @deprecated Use markdown instead. */
  text: Scalars['String']['output'];
  timelineEntryId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type GeneratedReplyFeedbackInput = {
  type?: InputMaybe<OptionalGeneratedReplyFeedbackInput>;
};

export enum GeneratedReplyFeedbackType {
  Negative = 'NEGATIVE',
  Positive = 'POSITIVE',
  Unknown = 'UNKNOWN'
}

export type GenericThreadLink = ThreadLink & {
  __typename?: 'GenericThreadLink';
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sourceId: Scalars['String']['output'];
  sourceStatus?: Maybe<ThreadLinkSourceStatus>;
  sourceType: Scalars['String']['output'];
  status: ThreadLinkStatus;
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type HeatmapHour = {
  __typename?: 'HeatmapHour';
  percentage: Scalars['Float']['output'];
  threadIds: Array<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type HeatmapMetric = {
  __typename?: 'HeatmapMetric';
  days: Array<Array<HeatmapHour>>;
};

export type HeatmapMetricOptionsInput = {
  dimensionType?: InputMaybe<MetricDimensionType>;
  dimensionValue?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  subDimension?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type HelpCenter = {
  __typename?: 'HelpCenter';
  access?: Maybe<HelpCenterAccessSettings>;
  agentAvatarImage: HelpCenterThemedImage;
  /** All article groups in the help center. */
  articleGroups: HelpCenterArticleGroupConnection;
  /** All articles in the help center. */
  articles: HelpCenterArticleConnection;
  authMechanism: HelpCenterAuthMechanism;
  bodyCustomJs?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<InternalActor>;
  description?: Maybe<Scalars['String']['output']>;
  domainSettings: HelpCenterDomainSettings;
  favicon: HelpCenterThemedImage;
  headCustomJs?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalName: Scalars['String']['output'];
  isChatEnabled: Scalars['Boolean']['output'];
  isDeleted: Scalars['Boolean']['output'];
  logo: HelpCenterThemedImage;
  portalSettings: HelpCenterPortalSettings;
  publicName: Scalars['String']['output'];
  publishedAt?: Maybe<DateTime>;
  publishedBy?: Maybe<InternalActor>;
  socialPreviewImage?: Maybe<WorkspaceFile>;
  type: HelpCenterType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type HelpCenterArticleGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type HelpCenterArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HelpCenterAccessSettings = {
  __typename?: 'HelpCenterAccessSettings';
  companyIds: Array<Scalars['String']['output']>;
  customerIds: Array<Scalars['String']['output']>;
  tenantIds: Array<Scalars['String']['output']>;
  tierIds: Array<Scalars['String']['output']>;
};

export type HelpCenterAccessSettingsInput = {
  companyIds?: InputMaybe<Array<Scalars['String']['input']>>;
  customerIds?: InputMaybe<Array<Scalars['String']['input']>>;
  tenantIds?: InputMaybe<Array<Scalars['String']['input']>>;
  tierIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type HelpCenterAiConversationMessageEntry = {
  __typename?: 'HelpCenterAiConversationMessageEntry';
  helpCenterAiConversationId: Scalars['ID']['output'];
  helpCenterId: Scalars['ID']['output'];
  markdown: Scalars['String']['output'];
  messageId: Scalars['ID']['output'];
};

export type HelpCenterArticle = {
  __typename?: 'HelpCenterArticle';
  /** The group this article belongs to, if any. */
  articleGroup?: Maybe<HelpCenterArticleGroup>;
  contentHtml: Scalars['String']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  status: HelpCenterArticleStatus;
  statusChangedAt: DateTime;
  statusChangedBy: InternalActor;
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type HelpCenterArticleConnection = {
  __typename?: 'HelpCenterArticleConnection';
  edges: Array<HelpCenterArticleEdge>;
  pageInfo: PageInfo;
};

export type HelpCenterArticleEdge = {
  __typename?: 'HelpCenterArticleEdge';
  cursor: Scalars['String']['output'];
  node: HelpCenterArticle;
};

export type HelpCenterArticleGroup = {
  __typename?: 'HelpCenterArticleGroup';
  /** Direct articles in this group. */
  articles: HelpCenterArticleConnection;
  /** Direct child groups under this group. */
  childArticleGroups: HelpCenterArticleGroupConnection;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Parent group in the hierarchy. Null for top-level groups. */
  parentArticleGroup?: Maybe<HelpCenterArticleGroup>;
  slug: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type HelpCenterArticleGroupArticlesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type HelpCenterArticleGroupChildArticleGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HelpCenterArticleGroupConnection = {
  __typename?: 'HelpCenterArticleGroupConnection';
  edges: Array<HelpCenterArticleGroupEdge>;
  pageInfo: PageInfo;
};

export type HelpCenterArticleGroupEdge = {
  __typename?: 'HelpCenterArticleGroupEdge';
  cursor: Scalars['String']['output'];
  node: HelpCenterArticleGroup;
};

export enum HelpCenterArticleStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type HelpCenterAuthMechanism = HelpCenterAuthMechanismWorkosAuthkit | HelpCenterAuthMechanismWorkosConnect;

export type HelpCenterAuthMechanismInput = {
  workosAuthkitAuthMechanism?: InputMaybe<HelpCenterWorkosAuthkitAuthMechanismInput>;
  workosConnectAuthMechanism?: InputMaybe<WorkosConnectAuthMechanismInput>;
};

export enum HelpCenterAuthMechanismType {
  WorkosAuthkit = 'WORKOS_AUTHKIT',
  WorkosConnect = 'WORKOS_CONNECT'
}

export type HelpCenterAuthMechanismWorkosAuthkit = {
  __typename?: 'HelpCenterAuthMechanismWorkosAuthkit';
  type: HelpCenterAuthMechanismType;
};

export type HelpCenterAuthMechanismWorkosConnect = {
  __typename?: 'HelpCenterAuthMechanismWorkosConnect';
  apiHost: Scalars['String']['output'];
  appClientId: Scalars['String']['output'];
  appSecretMasked: Scalars['String']['output'];
  type: HelpCenterAuthMechanismType;
};

export type HelpCenterConnection = {
  __typename?: 'HelpCenterConnection';
  edges: Array<HelpCenterEdge>;
  pageInfo: PageInfo;
};

export type HelpCenterDomainNameVerificationTxtRecord = {
  __typename?: 'HelpCenterDomainNameVerificationTxtRecord';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type HelpCenterDomainSettings = {
  __typename?: 'HelpCenterDomainSettings';
  customDomainName?: Maybe<Scalars['String']['output']>;
  customDomainNameVerificationTxtRecord?: Maybe<HelpCenterDomainNameVerificationTxtRecord>;
  customDomainNameVerifiedAt?: Maybe<DateTime>;
  domainName: Scalars['String']['output'];
};

export type HelpCenterEdge = {
  __typename?: 'HelpCenterEdge';
  cursor: Scalars['String']['output'];
  node: HelpCenter;
};

export type HelpCenterIndex = {
  __typename?: 'HelpCenterIndex';
  createdAt: DateTime;
  createdBy: InternalActor;
  hash: Scalars['String']['output'];
  helpCenterId: Scalars['ID']['output'];
  navIndex: Array<HelpCenterIndexItem>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type HelpCenterIndexItem = {
  __typename?: 'HelpCenterIndexItem';
  id: Scalars['ID']['output'];
  parentId?: Maybe<Scalars['ID']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: HelpCenterIndexItemType;
};

export type HelpCenterIndexItemInput = {
  entityId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  type: HelpCenterIndexItemType;
};

export enum HelpCenterIndexItemType {
  Article = 'ARTICLE',
  ArticleGroup = 'ARTICLE_GROUP'
}

export type HelpCenterPortalSettings = {
  __typename?: 'HelpCenterPortalSettings';
  formFields: Array<HelpCenterPortalSettingsFormField>;
  isAdditionalRecipientsEnabled: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  threadVisibility: HelpCenterPortalSettingsThreadVisibility;
};

export type HelpCenterPortalSettingsDropdownFormField = {
  __typename?: 'HelpCenterPortalSettingsDropdownFormField';
  dropdownOptions: Array<HelpCenterPortalSettingsDropdownOption>;
  id: Scalars['ID']['output'];
  isRequired: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  placeholder?: Maybe<Scalars['String']['output']>;
  type: HelpCenterPortalSettingsFormFieldType;
};

export type HelpCenterPortalSettingsDropdownOption = {
  __typename?: 'HelpCenterPortalSettingsDropdownOption';
  dropdownOptionId?: Maybe<Scalars['ID']['output']>;
  label: Scalars['String']['output'];
  threadDetails?: Maybe<HelpCenterPortalSettingsThreadDetails>;
};

export type HelpCenterPortalSettingsDropdownOptionInput = {
  dropdownOptionId?: InputMaybe<Scalars['ID']['input']>;
  label: Scalars['String']['input'];
  threadDetails?: InputMaybe<HelpCenterPortalSettingsThreadDetailsInput>;
};

export type HelpCenterPortalSettingsFormField = HelpCenterPortalSettingsDropdownFormField | HelpCenterPortalSettingsTextFormField;

export type HelpCenterPortalSettingsFormFieldInput = {
  dropdownOptions?: InputMaybe<Array<HelpCenterPortalSettingsDropdownOptionInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isRequired: Scalars['Boolean']['input'];
  label: Scalars['String']['input'];
  placeholder?: InputMaybe<Scalars['String']['input']>;
  threadDetails?: InputMaybe<HelpCenterPortalSettingsThreadDetailsInput>;
  type: HelpCenterPortalSettingsFormFieldType;
};

export enum HelpCenterPortalSettingsFormFieldType {
  Dropdown = 'DROPDOWN',
  TextArea = 'TEXT_AREA',
  TextInput = 'TEXT_INPUT'
}

export type HelpCenterPortalSettingsInput = {
  formFields?: InputMaybe<Array<HelpCenterPortalSettingsFormFieldInput>>;
  isAdditionalRecipientsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  threadVisibility?: InputMaybe<HelpCenterPortalSettingsThreadVisibilityInput>;
};

export type HelpCenterPortalSettingsTextFormField = {
  __typename?: 'HelpCenterPortalSettingsTextFormField';
  id: Scalars['ID']['output'];
  isRequired: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  placeholder?: Maybe<Scalars['String']['output']>;
  threadDetails?: Maybe<HelpCenterPortalSettingsThreadDetails>;
  type: HelpCenterPortalSettingsFormFieldType;
};

export type HelpCenterPortalSettingsThreadDetails = {
  __typename?: 'HelpCenterPortalSettingsThreadDetails';
  assignees?: Maybe<Array<ThreadAssignee>>;
  labelTypes?: Maybe<Array<LabelType>>;
  priority?: Maybe<Scalars['Int']['output']>;
  threadFields?: Maybe<Array<HelpCenterPortalSettingsThreadFields>>;
};

export type HelpCenterPortalSettingsThreadDetailsInput = {
  assignees?: InputMaybe<Array<ThreadAssigneeInput>>;
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  priority?: InputMaybe<Scalars['Int']['input']>;
  threadFields?: InputMaybe<Array<HelpCenterPortalSettingsThreadFieldsInput>>;
};

export type HelpCenterPortalSettingsThreadFields = {
  __typename?: 'HelpCenterPortalSettingsThreadFields';
  selectedBooleanValue?: Maybe<Scalars['Boolean']['output']>;
  selectedStringValue?: Maybe<Scalars['String']['output']>;
  threadFieldSchema: ThreadFieldSchema;
};

export type HelpCenterPortalSettingsThreadFieldsInput = {
  selectedBooleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  selectedStringValue?: InputMaybe<Scalars['String']['input']>;
  threadFieldSchemaId: Scalars['ID']['input'];
};

export type HelpCenterPortalSettingsThreadVisibility = {
  __typename?: 'HelpCenterPortalSettingsThreadVisibility';
  customerCompany: Scalars['Boolean']['output'];
  customerTenants: Scalars['Boolean']['output'];
};

export type HelpCenterPortalSettingsThreadVisibilityInput = {
  customerCompany?: InputMaybe<Scalars['Boolean']['input']>;
  customerTenants?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HelpCenterThemedImage = {
  __typename?: 'HelpCenterThemedImage';
  dark?: Maybe<WorkspaceFile>;
  light?: Maybe<WorkspaceFile>;
};

export type HelpCenterThemedImageInput = {
  dark: WorkspaceFileInput;
  light: WorkspaceFileInput;
};

export enum HelpCenterType {
  Internal = 'INTERNAL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type HelpCenterWorkosAuthkitAuthMechanismInput = {
  ignore?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImpersonationInput = {
  asCustomer: CustomerImpersonationInput;
};

export type ImportThreadChannelDetails = {
  __typename?: 'ImportThreadChannelDetails';
  importIntegrationKey: Scalars['String']['output'];
  importSourceUrl?: Maybe<Scalars['String']['output']>;
};

export type IndexedDocument = {
  __typename?: 'IndexedDocument';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  labelTypes: Array<LabelType>;
  status: IndexedDocumentStatus;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type IndexedDocumentConnection = {
  __typename?: 'IndexedDocumentConnection';
  edges: Array<IndexedDocumentEdge>;
  pageInfo: PageInfo;
};

export type IndexedDocumentEdge = {
  __typename?: 'IndexedDocumentEdge';
  cursor: Scalars['String']['output'];
  node: IndexedDocument;
};

export type IndexedDocumentStatus = IndexedDocumentStatusFailed | IndexedDocumentStatusIndexed | IndexedDocumentStatusPending;

export type IndexedDocumentStatusFailed = {
  __typename?: 'IndexedDocumentStatusFailed';
  failedAt: DateTime;
  reason: Scalars['String']['output'];
};

export type IndexedDocumentStatusIndexed = {
  __typename?: 'IndexedDocumentStatusIndexed';
  indexedAt: DateTime;
};

export type IndexedDocumentStatusPending = {
  __typename?: 'IndexedDocumentStatusPending';
  startedAt: DateTime;
};

export type IndexedDocumentsFilter = {
  knowledgeSourceId?: InputMaybe<Scalars['ID']['input']>;
};

export type IndexingStatus = IndexingStatusFailed | IndexingStatusIndexed | IndexingStatusPending;

export type IndexingStatusFailed = {
  __typename?: 'IndexingStatusFailed';
  failedAt: DateTime;
  reason: Scalars['String']['output'];
};

export type IndexingStatusIndexed = {
  __typename?: 'IndexingStatusIndexed';
  indexedAt: DateTime;
};

export type IndexingStatusPending = {
  __typename?: 'IndexingStatusPending';
  startedAt: DateTime;
};

export type IntArrayInput = {
  value: Array<Scalars['Int']['input']>;
};

export type IntInput = {
  value: Scalars['Int']['input'];
};

export type InternalActor = MachineUserActor | SystemActor | UserActor;

export type InviteUserToWorkspaceInput = {
  email: Scalars['String']['input'];
  /** @deprecated Use roleKey instead. */
  roleIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  roleKey?: InputMaybe<RoleKey>;
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
};

export type InviteUserToWorkspaceOutput = {
  __typename?: 'InviteUserToWorkspaceOutput';
  error?: Maybe<MutationError>;
  invite?: Maybe<WorkspaceInvite>;
};

export type IssueTrackerField = {
  __typename?: 'IssueTrackerField';
  isRequired: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  options: Array<IssueTrackerFieldOption>;
  parentFieldKey?: Maybe<Scalars['String']['output']>;
  selectedValue?: Maybe<Scalars['String']['output']>;
  type: IssueTrackerFieldType;
};

export type IssueTrackerFieldInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type IssueTrackerFieldOption = {
  __typename?: 'IssueTrackerFieldOption';
  color?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export enum IssueTrackerFieldType {
  Select = 'SELECT'
}

export type JiraIntegrationToken = {
  __typename?: 'JiraIntegrationToken';
  createdAt: DateTime;
  token: Scalars['String']['output'];
};

export type JiraIssueThreadLink = ThreadLink & {
  __typename?: 'JiraIssueThreadLink';
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  jiraIssueId: Scalars['ID']['output'];
  jiraIssueKey: Scalars['String']['output'];
  jiraIssueType: JiraIssueType;
  sourceId: Scalars['String']['output'];
  sourceType: Scalars['String']['output'];
  status: ThreadLinkStatus;
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type JiraIssueThreadLinkInput = {
  jiraIssueId: Scalars['ID']['input'];
};

export type JiraIssueType = {
  __typename?: 'JiraIssueType';
  iconUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type JiraSite = {
  __typename?: 'JiraSite';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type JiraSiteIntegration = ServiceIntegration & {
  __typename?: 'JiraSiteIntegration';
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  site: JiraSite;
};

export type KnowledgeSource = KnowledgeSourceSitemap | KnowledgeSourceUrl;

export type KnowledgeSourceConnection = {
  __typename?: 'KnowledgeSourceConnection';
  edges: Array<KnowledgeSourceEdge>;
  pageInfo: PageInfo;
};

export type KnowledgeSourceEdge = {
  __typename?: 'KnowledgeSourceEdge';
  cursor: Scalars['String']['output'];
  node: KnowledgeSource;
};

export type KnowledgeSourceSitemap = {
  __typename?: 'KnowledgeSourceSitemap';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  labelTypes: Array<LabelType>;
  status: IndexingStatus;
  type: KnowledgeSourceType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export enum KnowledgeSourceType {
  Sitemap = 'SITEMAP',
  Url = 'URL'
}

export type KnowledgeSourceUrl = {
  __typename?: 'KnowledgeSourceUrl';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  labelTypes: Array<LabelType>;
  status: IndexingStatus;
  type: KnowledgeSourceType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type KnowledgeSourcesFilter = {
  type?: InputMaybe<KnowledgeSourceType>;
};

export type Label = {
  __typename?: 'Label';
  createdAt: DateTime;
  createdBy: Actor;
  id: Scalars['ID']['output'];
  labelType: LabelType;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type LabelType = {
  __typename?: 'LabelType';
  archivedAt?: Maybe<DateTime>;
  archivedBy?: Maybe<InternalActor>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isArchived: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parentLabelType?: Maybe<LabelType>;
  /** The position of the label type. Always relative to its parent. */
  position: Scalars['String']['output'];
  type: LabelTypeType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type LabelTypeConnection = {
  __typename?: 'LabelTypeConnection';
  edges: Array<LabelTypeEdge>;
  pageInfo: PageInfo;
};

export type LabelTypeEdge = {
  __typename?: 'LabelTypeEdge';
  cursor: Scalars['String']['output'];
  node: LabelType;
};

export type LabelTypeFilter = {
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LabelTypeType {
  Default = 'DEFAULT',
  Team = 'TEAM'
}

export type LinearIntegrationToken = {
  __typename?: 'LinearIntegrationToken';
  token: Scalars['String']['output'];
};

export type LinearIssueState = {
  __typename?: 'LinearIssueState';
  color: Scalars['String']['output'];
  label: Scalars['String']['output'];
  type: LinearIssueStateType;
};

/**
 * Represents the possible states of a Linear issue, sourced from the Linear API.
 * Reference: https://studio.apollographql.com/public/Linear-API/variant/current/schema/reference/objects/WorkflowState#type
 */
export enum LinearIssueStateType {
  Backlog = 'BACKLOG',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Started = 'STARTED',
  Triage = 'TRIAGE',
  /** Placeholder for unknown or unsupported future states from Linear. */
  Unknown = 'UNKNOWN',
  Unstarted = 'UNSTARTED'
}

export type LinearIssueThreadLink = ThreadLink & {
  __typename?: 'LinearIssueThreadLink';
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  linearIssueCreatedAt: DateTime;
  linearIssueId: Scalars['ID']['output'];
  linearIssueIdentifier: Scalars['String']['output'];
  linearIssueState: LinearIssueState;
  linearIssueUpdatedAt: DateTime;
  /** @deprecated Use url instead. */
  linearIssueUrl: Scalars['String']['output'];
  sourceId: Scalars['String']['output'];
  sourceType: Scalars['String']['output'];
  status: ThreadLinkStatus;
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type LinearIssueThreadLinkInput = {
  linearIssueId: Scalars['ID']['input'];
  linearIssueUrl: Scalars['String']['input'];
};

export type LinearIssueThreadLinkStateTransitionedEntry = {
  __typename?: 'LinearIssueThreadLinkStateTransitionedEntry';
  linearIssueId: Scalars['ID']['output'];
  /** Refers to the id of the WorkflowState object in Linear. This can be used to fetch the WorkflowState from the Linear API. */
  nextLinearStateId: Scalars['ID']['output'];
  /** Refers to the id of the WorkflowState object in Linear. This can be used to fetch the WorkflowState from the Linear API. */
  previousLinearStateId: Scalars['ID']['output'];
};

export type MsTeamsMessage = {
  __typename?: 'MSTeamsMessage';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  deletedOnMsTeamsAt?: Maybe<DateTime>;
  hasUnprocessedAttachments: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  lastEditedOnMsTeamsAt?: Maybe<DateTime>;
  markdownContent?: Maybe<Scalars['String']['output']>;
  msTeamsConversationId?: Maybe<Scalars['ID']['output']>;
  msTeamsMessageId?: Maybe<Scalars['ID']['output']>;
  msTeamsMessageLink: Scalars['String']['output'];
  msTeamsTeamId?: Maybe<Scalars['ID']['output']>;
  msTeamsTenantId?: Maybe<Scalars['ID']['output']>;
  parentMessageId?: Maybe<Scalars['ID']['output']>;
  text: Scalars['String']['output'];
  threadId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type MsTeamsMessageEntry = {
  __typename?: 'MSTeamsMessageEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID']['output'];
  deletedOnMsTeamsAt?: Maybe<DateTime>;
  hasUnprocessedAttachments: Scalars['Boolean']['output'];
  lastEditedOnMsTeamsAt?: Maybe<DateTime>;
  markdownContent?: Maybe<Scalars['String']['output']>;
  msTeamsMessageId: Scalars['ID']['output'];
  msTeamsMessageLink: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type MsTeamsThreadChannelDetails = {
  __typename?: 'MSTeamsThreadChannelDetails';
  msTeamsChannelId: Scalars['ID']['output'];
  msTeamsChannelName: Scalars['String']['output'];
  msTeamsTeamId: Scalars['ID']['output'];
  msTeamsTeamName: Scalars['String']['output'];
};

export type MsTeamsThreadChannelDetailsInput = {
  msTeamsChannelId: Scalars['ID']['input'];
  msTeamsTeamId: Scalars['ID']['input'];
};

export type MachineUser = {
  __typename?: 'MachineUser';
  apiKey?: Maybe<ApiKey>;
  apiKeys: ApiKeyConnection;
  avatar?: Maybe<WorkspaceFile>;
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<Actor>;
  description?: Maybe<Scalars['String']['output']>;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  publicName: Scalars['String']['output'];
  /** The type of machine user. Defaults to API_USER if not specified during creation. */
  type: MachineUserType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type MachineUserApiKeyArgs = {
  apiKeyId: Scalars['ID']['input'];
};


export type MachineUserApiKeysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type MachineUserActor = {
  __typename?: 'MachineUserActor';
  machineUser: MachineUser;
  machineUserId: Scalars['ID']['output'];
};

export type MachineUserConnection = {
  __typename?: 'MachineUserConnection';
  edges: Array<MachineUserEdge>;
  pageInfo: PageInfo;
};

export type MachineUserEdge = {
  __typename?: 'MachineUserEdge';
  cursor: Scalars['String']['output'];
  node: MachineUser;
};

export enum MachineUserType {
  /** A machine user that represents an AI Agent */
  AiAgent = 'AI_AGENT',
  /** A machine user that interacts via API */
  ApiUser = 'API_USER'
}

export type MachineUsersFilter = {
  type?: InputMaybe<MachineUserType>;
};

export type MarkCustomerAsSpamInput = {
  customerId: Scalars['ID']['input'];
};

export type MarkCustomerAsSpamOutput = {
  __typename?: 'MarkCustomerAsSpamOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type MarkThreadAsDoneInput = {
  statusDetail?: InputMaybe<DoneStatusDetail>;
  threadId: Scalars['ID']['input'];
};

export type MarkThreadAsDoneOutput = {
  __typename?: 'MarkThreadAsDoneOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type MarkThreadAsTodoInput = {
  statusDetail?: InputMaybe<TodoStatusDetail>;
  threadId: Scalars['ID']['input'];
};

export type MarkThreadAsTodoOutput = {
  __typename?: 'MarkThreadAsTodoOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type MarkThreadDiscussionAsResolvedInput = {
  threadDiscussionId: Scalars['ID']['input'];
};

export type MarkThreadDiscussionAsResolvedOutput = {
  __typename?: 'MarkThreadDiscussionAsResolvedOutput';
  error?: Maybe<MutationError>;
};

export enum MessageSource {
  Api = 'API',
  Chat = 'CHAT',
  Discord = 'DISCORD',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type MeteredFeatureEntitlement = BillingFeatureEntitlement & {
  __typename?: 'MeteredFeatureEntitlement';
  current: Scalars['Int']['output'];
  feature: FeatureKey;
  isEntitled: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
};

export type MetricDimension = {
  __typename?: 'MetricDimension';
  type: MetricDimensionType;
  value: Scalars['String']['output'];
};

export enum MetricDimensionType {
  Company = 'COMPANY',
  CustomerGroup = 'CUSTOMER_GROUP',
  LabelType = 'LABEL_TYPE',
  MessageSource = 'MESSAGE_SOURCE',
  Priority = 'PRIORITY',
  TenantField = 'TENANT_FIELD',
  ThreadField = 'THREAD_FIELD',
  Tier = 'TIER'
}

export type MinimalThreadWithDistance = {
  __typename?: 'MinimalThreadWithDistance';
  customerId: Scalars['ID']['output'];
  distance: Scalars['Float']['output'];
  threadId: Scalars['ID']['output'];
  tierId?: Maybe<Scalars['ID']['output']>;
};

export type MoveLabelTypeInput = {
  /** Move the label type immediately after the label type with the given ID. Required if beforeLabelTypeId is not provided. */
  afterLabelTypeId?: InputMaybe<Scalars['ID']['input']>;
  /** Move the label type immediately before the label type with the given ID. Required if afterLabelTypeId is not provided. */
  beforeLabelTypeId?: InputMaybe<Scalars['ID']['input']>;
  labelTypeId: Scalars['ID']['input'];
  /** Move the label type to be a child of the specified parent. When provided alone, the label will be moved to the end of the parent's children. When provided with afterLabelTypeId or beforeLabelTypeId, validates that the reference label has the same parent. */
  parentLabelTypeId?: InputMaybe<Scalars['ID']['input']>;
};

export type MoveLabelTypeOutput = {
  __typename?: 'MoveLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptWorkspaceInvite: AcceptWorkspaceInviteOutput;
  addAdditionalAssignees: AddAdditionalAssigneesOutput;
  /** Add a customer to a customer group. */
  addCustomerToCustomerGroups: AddCustomerToCustomerGroupsOutput;
  addCustomerToTenants: AddCustomerToTenantsOutput;
  addGeneratedReply: AddGeneratedReplyOutput;
  addLabels: AddLabelsOutput;
  addLabelsToUser: AddLabelsToUserOutput;
  addMembersToTier: AddMembersToTierOutput;
  addUserToActiveBillingRota: AddUserToActiveBillingRotaOutput;
  addWorkspaceAlternateSupportEmailAddress: AddWorkspaceAlternateSupportEmailAddressOutput;
  archiveLabelType: ArchiveLabelTypeOutput;
  assignRolesToUser: AssignRolesToUserOutput;
  assignThread: AssignThreadOutput;
  bulkJoinSlackChannels: BulkJoinSlackChannelsOutput;
  bulkUpsertThreadFields: BulkUpsertThreadFieldsOutput;
  calculateRoleChangeCost: CalculateRoleChangeCostOutput;
  changeBillingPlan: ChangeBillingPlanOutput;
  changeThreadCustomer: ChangeThreadCustomerOutput;
  changeThreadPriority: ChangeThreadPriorityOutput;
  changeUserStatus: ChangeUserStatusOutput;
  completeServiceAuthorization: CompleteServiceAuthorizationOutput;
  createApiKey: CreateApiKeyOutput;
  createAttachmentDownloadUrl: CreateAttachmentDownloadUrlOutput;
  createAttachmentUploadUrl: CreateAttachmentUploadUrlOutput;
  createAutoresponder: CreateAutoresponderOutput;
  createBillingPortalSession: CreateBillingPortalSessionOutput;
  createChatApp: CreateChatAppOutput;
  createChatAppSecret: CreateChatAppSecretOutput;
  createCheckoutSession: CreateCheckoutSessionOutput;
  /** Creates a customer card config. A maximum of 25 card configs can be created. */
  createCustomerCardConfig: CreateCustomerCardConfigOutput;
  /** Create a new customer event. */
  createCustomerEvent: CreateCustomerEventOutput;
  /** Create a new customer group. */
  createCustomerGroup: CreateCustomerGroupOutput;
  createCustomerSurvey: CreateCustomerSurveyOutput;
  createEmailPreviewUrl: CreateEmailPreviewUrlOutput;
  createEscalationPath: CreateEscalationPathOutput;
  createHelpCenter: CreateHelpCenterOutput;
  createHelpCenterArticleGroup: CreateHelpCenterArticleGroupOutput;
  createIndexedDocument: CreateIndexedDocumentOutput;
  createIssueTrackerIssue: CreateIssueTrackerIssueOutput;
  createKnowledgeSource: CreateKnowledgeSourceOutput;
  createLabelType: CreateLabelTypeOutput;
  createMachineUser: CreateMachineUserOutput;
  createMyFavoritePage: CreateMyFavoritePageOutput;
  createMyLinearIntegration: CreateMyLinearIntegrationOutput;
  createMyMSTeamsIntegration: CreateMyMsTeamsIntegrationOutput;
  createMySlackIntegration: CreateMySlackIntegrationOutput;
  createNote: CreateNoteOutput;
  createSavedThreadsView: CreateSavedThreadsViewOutput;
  createServiceLevelAgreement: CreateServiceLevelAgreementOutput;
  createSnippet: CreateSnippetOutput;
  createThread: CreateThreadOutput;
  createThreadChannelAssociation: CreateThreadChannelAssociationOutput;
  createThreadDiscussion: CreateThreadDiscussionOutput;
  /** Create a new thread event. */
  createThreadEvent: CreateThreadEventOutput;
  createThreadFieldSchema: CreateThreadFieldSchemaOutput;
  createThreadLink: CreateThreadLinkOutput;
  createTier: CreateTierOutput;
  createUserAccount: CreateUserAccountOutput;
  createUserAuthDiscordChannelIntegration: CreateUserAuthDiscordChannelIntegrationOutput;
  createUserAuthSlackIntegration: CreateUserAuthSlackIntegrationOutput;
  /** Creates a webhook target. */
  createWebhookTarget: CreateWebhookTargetOutput;
  createWorkflowRule: CreateWorkflowRuleOutput;
  createWorkspace: CreateWorkspaceOutput;
  createWorkspaceDiscordChannelIntegration: CreateWorkspaceDiscordChannelIntegrationOutput;
  createWorkspaceDiscordIntegration: CreateWorkspaceDiscordIntegrationOutput;
  createWorkspaceEmailDomainSettings: CreateWorkspaceEmailDomainSettingsOutput;
  createWorkspaceFileUploadUrl: CreateWorkspaceFileUploadUrlOutput;
  createWorkspaceMSTeamsIntegration: CreateWorkspaceMsTeamsIntegrationOutput;
  createWorkspaceSlackChannelIntegration: CreateWorkspaceSlackChannelIntegrationOutput;
  createWorkspaceSlackIntegration: CreateWorkspaceSlackIntegrationOutput;
  deleteApiKey: DeleteApiKeyOutput;
  deleteAutoresponder: DeleteAutoresponderOutput;
  /** @deprecated Use syncBusinessHoursSlots instead. */
  deleteBusinessHours: DeleteBusinessHoursOutput;
  deleteChatApp: DeleteChatAppOutput;
  deleteChatAppSecret: DeleteChatAppSecretOutput;
  deleteCompany: DeleteCompanyOutput;
  /** Deletes a customer and all of their data stored on Plain. This action cannot be reversed. */
  deleteCustomer: DeleteCustomerOutput;
  /** Deletes a customer card config. */
  deleteCustomerCardConfig: DeleteCustomerCardConfigOutput;
  /** Delete a customer group by ID. */
  deleteCustomerGroup: DeleteCustomerGroupOutput;
  deleteCustomerSurvey: DeleteCustomerSurveyOutput;
  deleteEscalationPath: DeleteEscalationPathOutput;
  deleteHelpCenter: DeleteHelpCenterOutput;
  deleteHelpCenterArticle: DeleteHelpCenterArticleOutput;
  deleteHelpCenterArticleGroup: DeleteHelpCenterArticleGroupOutput;
  deleteKnowledgeSource: DeleteKnowledgeSourceOutput;
  deleteMachineUser: DeleteMachineUserOutput;
  deleteMyFavoritePage: DeleteMyFavoritePageOutput;
  deleteMyLinearIntegration: DeleteMyLinearIntegrationOutput;
  deleteMyMSTeamsIntegration: DeleteMyMsTeamsIntegrationOutput;
  /** Delete personal service authorizations for the current user. */
  deleteMyServiceAuthorization: DeleteMyServiceAuthorizationOutput;
  deleteMySlackIntegration: DeleteMySlackIntegrationOutput;
  deleteNote: DeleteNoteOutput;
  deleteSavedThreadsView: DeleteSavedThreadsViewOutput;
  /** Delete the workspace service authorization. */
  deleteServiceAuthorization: DeleteServiceAuthorizationOutput;
  deleteServiceLevelAgreement: DeleteServiceLevelAgreementOutput;
  deleteSnippet: DeleteSnippetOutput;
  deleteTenant: DeleteTenantOutput;
  deleteTenantField: DeleteTenantFieldOutput;
  deleteTenantFieldSchema: DeleteTenantFieldSchemaOutput;
  deleteThreadChannelAssociation: DeleteThreadChannelAssociationOutput;
  deleteThreadField: DeleteThreadFieldOutput;
  deleteThreadFieldSchema: DeleteThreadFieldSchemaOutput;
  deleteThreadLink: DeleteThreadLinkOutput;
  deleteTier: DeleteTierOutput;
  deleteUser: DeleteUserOutput;
  deleteUserAuthDiscordChannelIntegration: DeleteUserAuthDiscordChannelIntegrationOutput;
  deleteUserAuthSlackIntegration: DeleteUserAuthSlackIntegrationOutput;
  /** Deletes a webhook target. */
  deleteWebhookTarget: DeleteWebhookTargetOutput;
  deleteWorkflowRule: DeleteWorkflowRuleOutput;
  deleteWorkspaceDiscordChannelIntegration: DeleteWorkspaceDiscordChannelIntegrationOutput;
  deleteWorkspaceDiscordIntegration: DeleteWorkspaceDiscordIntegrationOutput;
  deleteWorkspaceEmailDomainSettings: DeleteWorkspaceEmailDomainSettingsOutput;
  deleteWorkspaceFile: DeleteWorkspaceFileOutput;
  deleteWorkspaceInvite: DeleteWorkspaceInviteOutput;
  deleteWorkspaceMSTeamsIntegration: DeleteWorkspaceMsTeamsIntegrationOutput;
  deleteWorkspaceSlackChannelIntegration: DeleteWorkspaceSlackChannelIntegrationOutput;
  deleteWorkspaceSlackIntegration: DeleteWorkspaceSlackIntegrationOutput;
  escalateThread: EscalateThreadOutput;
  forkThread: ForkThreadOutput;
  generateHelpCenterArticle: GenerateHelpCenterArticleOutput;
  inviteUserToWorkspace: InviteUserToWorkspaceOutput;
  /** Marks a customer as spam. */
  markCustomerAsSpam: MarkCustomerAsSpamOutput;
  markThreadAsDone: MarkThreadAsDoneOutput;
  markThreadAsTodo: MarkThreadAsTodoOutput;
  markThreadDiscussionAsResolved: MarkThreadDiscussionAsResolvedOutput;
  moveLabelType: MoveLabelTypeOutput;
  previewBillingPlanChange: PreviewBillingPlanChangeOutput;
  refreshConnectedDiscordChannels: RefreshConnectedDiscordChannelsOutput;
  refreshWorkspaceSlackChannelIntegration: RefreshWorkspaceSlackChannelIntegrationOutput;
  regenerateWorkspaceHmac: RegenerateWorkspaceHmacOutput;
  /**
   * Reloads a customer card for a customer.
   *
   * Will discard whatever is in the cache and reload it from the configured API URL.
   */
  reloadCustomerCardInstance: ReloadCustomerCardInstanceOutput;
  removeAdditionalAssignees: RemoveAdditionalAssigneesOutput;
  /** Remove a customer from a customer group. */
  removeCustomerFromCustomerGroups: RemoveCustomerFromCustomerGroupsOutput;
  removeCustomerFromTenants: RemoveCustomerFromTenantsOutput;
  removeLabels: RemoveLabelsOutput;
  removeLabelsFromUser: RemoveLabelsFromUserOutput;
  removeMembersFromTier: RemoveMembersFromTierOutput;
  removeUserFromActiveBillingRota: RemoveUserFromActiveBillingRotaOutput;
  removeWorkspaceAlternateSupportEmailAddress: RemoveWorkspaceAlternateSupportEmailAddressOutput;
  reorderAutoresponders: ReorderAutorespondersOutput;
  /**
   * Reorders customer card configs.
   *
   * The input can be a partial input and in that case not all configs will be reordered.
   * For example this allows two configs to be swapped with each other.
   *
   * Note: Duplicate orders are allowed by the API.
   */
  reorderCustomerCardConfigs: ReorderCustomerCardConfigsOutput;
  reorderCustomerSurveys: ReorderCustomerSurveysOutput;
  reorderThreadFieldSchemas: ReorderThreadFieldSchemasOutput;
  replyToEmail: ReplyToEmailOutput;
  /**
   * Reply to the last message in a thread. This mutation supports replying to threads where the last message is
   * a Slack message, an email or a form submission. If the thread is empty, it will send an email to the customer.
   */
  replyToThread: ReplyToThreadOutput;
  resolveCustomerForMSTeamsChannel: ResolveCustomerForMsTeamsChannelOutput;
  /** Resolves a customer for a Slack channel by finding or creating a customer associated with one of the Slack users in the channel. */
  resolveCustomerForSlackChannel: ResolveCustomerForSlackChannelOutput;
  sendBulkEmail: SendBulkEmailOutput;
  sendChat: SendChatOutput;
  sendCustomerChat: SendCustomerChatOutput;
  sendDiscordMessage: SendDiscordMessageOutput;
  sendMSTeamsMessage: SendMsTeamsMessageOutput;
  sendNewEmail: SendNewEmailOutput;
  sendSlackMessage: SendSlackMessageOutput;
  sendThreadDiscussionMessage: SendThreadDiscussionMessageOutput;
  setCustomerTenants: SetCustomerTenantsOutput;
  shareThreadToUserInSlack: ShareThreadToUserInSlackOutput;
  snoozeThread: SnoozeThreadOutput;
  startServiceAuthorization: StartServiceAuthorizationOutput;
  syncBusinessHoursSlots: SyncBusinessHoursSlotsOutput;
  /** Adds or removes a reaction from a slack message timeline entry. */
  toggleSlackMessageReaction: ToggleSlackMessageReactionOutput;
  toggleWorkflowRulePublished: ToggleWorkflowRulePublishedOutput;
  unarchiveLabelType: UnarchiveLabelTypeOutput;
  unassignThread: UnassignThreadOutput;
  /** Removes the spam mark from a customer. */
  unmarkCustomerAsSpam: UnmarkCustomerAsSpamOutput;
  updateActiveBillingRota: UpdateActiveBillingRotaOutput;
  updateApiKey: UpdateApiKeyOutput;
  updateAutoresponder: UpdateAutoresponderOutput;
  updateChatApp: UpdateChatAppOutput;
  updateCompanyTier: UpdateCompanyTierOutput;
  updateConnectedDiscordChannel: UpdateConnectedDiscordChannelOutput;
  updateConnectedSlackChannel: UpdateConnectedSlackChannelOutput;
  /** Partially updates a customer card config. */
  updateCustomerCardConfig: UpdateCustomerCardConfigOutput;
  /** Changes the company of a customer. */
  updateCustomerCompany: UpdateCustomerCompanyOutput;
  /** Update a customer group. */
  updateCustomerGroup: UpdateCustomerGroupOutput;
  updateCustomerSurvey: UpdateCustomerSurveyOutput;
  updateEscalationPath: UpdateEscalationPathOutput;
  updateGeneratedReply: UpdateGeneratedReplyOutput;
  updateHelpCenter: UpdateHelpCenterOutput;
  updateHelpCenterArticleGroup: UpdateHelpCenterArticleGroupOutput;
  updateHelpCenterCustomDomainName: UpdateHelpCenterCustomDomainNameOutput;
  updateHelpCenterIndex: UpdateHelpCenterIndexOutput;
  updateLabelType: UpdateLabelTypeOutput;
  updateMachineUser: UpdateMachineUserOutput;
  updateMyUser: UpdateMyUserOutput;
  updateSavedThreadsView: UpdateSavedThreadsViewOutput;
  updateServiceLevelAgreement: UpdateServiceLevelAgreementOutput;
  /** Updates a setting. */
  updateSetting: UpdateSettingOutput;
  updateSnippet: UpdateSnippetOutput;
  updateTenantTier: UpdateTenantTierOutput;
  updateThreadEscalationPath: UpdateThreadEscalationPathOutput;
  updateThreadFieldSchema: UpdateThreadFieldSchemaOutput;
  updateThreadTenant: UpdateThreadTenantOutput;
  updateThreadTier: UpdateThreadTierOutput;
  updateThreadTitle: UpdateThreadTitleOutput;
  updateTier: UpdateTierOutput;
  /** Updates a webhook target. */
  updateWebhookTarget: UpdateWebhookTargetOutput;
  updateWorkflowRule: UpdateWorkflowRuleOutput;
  updateWorkspace: UpdateWorkspaceOutput;
  updateWorkspaceEmailSettings: UpdateWorkspaceEmailSettingsOutput;
  /** @deprecated Use syncBusinessHoursSlots instead. */
  upsertBusinessHours: UpsertBusinessHoursOutput;
  upsertCompany: UpsertCompanyOutput;
  /** Creates or updates a customer. */
  upsertCustomer: UpsertCustomerOutput;
  /** Creates or updates a customer group. */
  upsertCustomerGroup: UpsertCustomerGroupOutput;
  upsertHelpCenterArticle: UpsertHelpCenterArticleOutput;
  upsertMyEmailSignature: UpsertMyEmailSignatureOutput;
  upsertTenant: UpsertTenantOutput;
  upsertTenantField: UpsertTenantFieldOutput;
  upsertTenantFieldSchema: UpsertTenantFieldSchemaOutput;
  upsertThreadField: UpsertThreadFieldOutput;
  verifyHelpCenterCustomDomainName: VerifyHelpCenterCustomDomainNameOutput;
  verifyWorkspaceEmailDnsSettings: VerifyWorkspaceEmailDnsSettingsOutput;
  verifyWorkspaceEmailForwardingSettings: VerifyWorkspaceEmailForwardingSettingsOutput;
};


export type MutationAcceptWorkspaceInviteArgs = {
  input: AcceptWorkspaceInviteInput;
};


export type MutationAddAdditionalAssigneesArgs = {
  input: AddAdditionalAssigneesInput;
};


export type MutationAddCustomerToCustomerGroupsArgs = {
  input: AddCustomerToCustomerGroupsInput;
};


export type MutationAddCustomerToTenantsArgs = {
  input: AddCustomerToTenantsInput;
};


export type MutationAddGeneratedReplyArgs = {
  input: AddGeneratedReplyInput;
};


export type MutationAddLabelsArgs = {
  input: AddLabelsInput;
};


export type MutationAddLabelsToUserArgs = {
  input: AddLabelsToUserInput;
};


export type MutationAddMembersToTierArgs = {
  input: AddMembersToTierInput;
};


export type MutationAddUserToActiveBillingRotaArgs = {
  input: AddUserToActiveBillingRotaInput;
};


export type MutationAddWorkspaceAlternateSupportEmailAddressArgs = {
  input: AddWorkspaceAlternateSupportEmailAddressInput;
};


export type MutationArchiveLabelTypeArgs = {
  input: ArchiveLabelTypeInput;
};


export type MutationAssignRolesToUserArgs = {
  input: AssignRolesToUserInput;
};


export type MutationAssignThreadArgs = {
  input: AssignThreadInput;
};


export type MutationBulkJoinSlackChannelsArgs = {
  input: BulkJoinSlackChannelsInput;
};


export type MutationBulkUpsertThreadFieldsArgs = {
  input: BulkUpsertThreadFieldsInput;
};


export type MutationCalculateRoleChangeCostArgs = {
  input: CalculateRoleChangeCostInput;
};


export type MutationChangeBillingPlanArgs = {
  input: ChangeBillingPlanInput;
};


export type MutationChangeThreadCustomerArgs = {
  input: ChangeThreadCustomerInput;
};


export type MutationChangeThreadPriorityArgs = {
  input: ChangeThreadPriorityInput;
};


export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};


export type MutationCompleteServiceAuthorizationArgs = {
  input: CompleteServiceAuthorizationInput;
};


export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationCreateAttachmentDownloadUrlArgs = {
  input: CreateAttachmentDownloadUrlInput;
};


export type MutationCreateAttachmentUploadUrlArgs = {
  input: CreateAttachmentUploadUrlInput;
};


export type MutationCreateAutoresponderArgs = {
  input: CreateAutoresponderInput;
};


export type MutationCreateChatAppArgs = {
  input: CreateChatAppInput;
};


export type MutationCreateChatAppSecretArgs = {
  input: CreateChatAppSecretInput;
};


export type MutationCreateCheckoutSessionArgs = {
  input: CreateCheckoutSessionInput;
};


export type MutationCreateCustomerCardConfigArgs = {
  input: CreateCustomerCardConfigInput;
};


export type MutationCreateCustomerEventArgs = {
  input: CreateCustomerEventInput;
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};


export type MutationCreateCustomerSurveyArgs = {
  input: CreateCustomerSurveyInput;
};


export type MutationCreateEmailPreviewUrlArgs = {
  input: CreateEmailPreviewUrlInput;
};


export type MutationCreateEscalationPathArgs = {
  input: CreateEscalationPathInput;
};


export type MutationCreateHelpCenterArgs = {
  input: CreateHelpCenterInput;
};


export type MutationCreateHelpCenterArticleGroupArgs = {
  input: CreateHelpCenterArticleGroupInput;
};


export type MutationCreateIndexedDocumentArgs = {
  input: CreateIndexedDocumentInput;
};


export type MutationCreateIssueTrackerIssueArgs = {
  input: CreateIssueTrackerIssueInput;
};


export type MutationCreateKnowledgeSourceArgs = {
  input: CreateKnowledgeSourceInput;
};


export type MutationCreateLabelTypeArgs = {
  input: CreateLabelTypeInput;
};


export type MutationCreateMachineUserArgs = {
  input: CreateMachineUserInput;
};


export type MutationCreateMyFavoritePageArgs = {
  input: CreateMyFavoritePageInput;
};


export type MutationCreateMyLinearIntegrationArgs = {
  input: CreateMyLinearIntegrationInput;
};


export type MutationCreateMyMsTeamsIntegrationArgs = {
  input: CreateMyMsTeamsIntegrationInput;
};


export type MutationCreateMySlackIntegrationArgs = {
  input: CreateMySlackIntegrationInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateSavedThreadsViewArgs = {
  input: CreateSavedThreadsViewInput;
};


export type MutationCreateServiceLevelAgreementArgs = {
  input: CreateServiceLevelAgreementInput;
};


export type MutationCreateSnippetArgs = {
  input: CreateSnippetInput;
};


export type MutationCreateThreadArgs = {
  input: CreateThreadInput;
};


export type MutationCreateThreadChannelAssociationArgs = {
  input: CreateThreadChannelAssociationInput;
};


export type MutationCreateThreadDiscussionArgs = {
  input: CreateThreadDiscussionInput;
};


export type MutationCreateThreadEventArgs = {
  input: CreateThreadEventInput;
};


export type MutationCreateThreadFieldSchemaArgs = {
  input: CreateThreadFieldSchemaInput;
};


export type MutationCreateThreadLinkArgs = {
  input: CreateThreadLinkInput;
};


export type MutationCreateTierArgs = {
  input: CreateTierInput;
};


export type MutationCreateUserAccountArgs = {
  input: CreateUserAccountInput;
};


export type MutationCreateUserAuthDiscordChannelIntegrationArgs = {
  input: CreateUserAuthDiscordChannelIntegrationInput;
};


export type MutationCreateUserAuthSlackIntegrationArgs = {
  input: CreateUserAuthSlackIntegrationInput;
};


export type MutationCreateWebhookTargetArgs = {
  input: CreateWebhookTargetInput;
};


export type MutationCreateWorkflowRuleArgs = {
  input: CreateWorkflowRuleInput;
};


export type MutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationCreateWorkspaceDiscordChannelIntegrationArgs = {
  input: CreateWorkspaceDiscordChannelIntegrationInput;
};


export type MutationCreateWorkspaceDiscordIntegrationArgs = {
  input: CreateWorkspaceDiscordIntegrationInput;
};


export type MutationCreateWorkspaceEmailDomainSettingsArgs = {
  input: CreateWorkspaceEmailDomainSettingsInput;
};


export type MutationCreateWorkspaceFileUploadUrlArgs = {
  input: CreateWorkspaceFileUploadUrlInput;
};


export type MutationCreateWorkspaceMsTeamsIntegrationArgs = {
  input: CreateWorkspaceMsTeamsIntegrationInput;
};


export type MutationCreateWorkspaceSlackChannelIntegrationArgs = {
  input: CreateWorkspaceSlackChannelIntegrationInput;
};


export type MutationCreateWorkspaceSlackIntegrationArgs = {
  input: CreateWorkspaceSlackIntegrationInput;
};


export type MutationDeleteApiKeyArgs = {
  input: DeleteApiKeyInput;
};


export type MutationDeleteAutoresponderArgs = {
  input: DeleteAutoresponderInput;
};


export type MutationDeleteChatAppArgs = {
  input: DeleteChatAppInput;
};


export type MutationDeleteChatAppSecretArgs = {
  input: DeleteChatAppSecretInput;
};


export type MutationDeleteCompanyArgs = {
  input: DeleteCompanyInput;
};


export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput;
};


export type MutationDeleteCustomerCardConfigArgs = {
  input: DeleteCustomerCardConfigInput;
};


export type MutationDeleteCustomerGroupArgs = {
  input: DeleteCustomerGroupInput;
};


export type MutationDeleteCustomerSurveyArgs = {
  input: DeleteCustomerSurveyInput;
};


export type MutationDeleteEscalationPathArgs = {
  input: DeleteEscalationPathInput;
};


export type MutationDeleteHelpCenterArgs = {
  input: DeleteHelpCenterInput;
};


export type MutationDeleteHelpCenterArticleArgs = {
  input: DeleteHelpCenterArticleInput;
};


export type MutationDeleteHelpCenterArticleGroupArgs = {
  input: DeleteHelpCenterArticleGroupInput;
};


export type MutationDeleteKnowledgeSourceArgs = {
  input: DeleteKnowledgeSourceInput;
};


export type MutationDeleteMachineUserArgs = {
  input: DeleteMachineUserInput;
};


export type MutationDeleteMyFavoritePageArgs = {
  input: DeleteMyFavoritePageInput;
};


export type MutationDeleteMyServiceAuthorizationArgs = {
  input: DeleteMyServiceAuthorizationInput;
};


export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};


export type MutationDeleteSavedThreadsViewArgs = {
  input: DeleteSavedThreadsViewInput;
};


export type MutationDeleteServiceAuthorizationArgs = {
  input: DeleteServiceAuthorizationInput;
};


export type MutationDeleteServiceLevelAgreementArgs = {
  input: DeleteServiceLevelAgreementInput;
};


export type MutationDeleteSnippetArgs = {
  input: DeleteSnippetInput;
};


export type MutationDeleteTenantArgs = {
  input: DeleteTenantInput;
};


export type MutationDeleteTenantFieldArgs = {
  input: DeleteTenantFieldInput;
};


export type MutationDeleteTenantFieldSchemaArgs = {
  input: DeleteTenantFieldSchemaInput;
};


export type MutationDeleteThreadChannelAssociationArgs = {
  input: DeleteThreadChannelAssociationInput;
};


export type MutationDeleteThreadFieldArgs = {
  input: DeleteThreadFieldInput;
};


export type MutationDeleteThreadFieldSchemaArgs = {
  input: DeleteThreadFieldSchemaInput;
};


export type MutationDeleteThreadLinkArgs = {
  input: DeleteThreadLinkInput;
};


export type MutationDeleteTierArgs = {
  input: DeleteTierInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteUserAuthDiscordChannelIntegrationArgs = {
  input: DeleteUserAuthDiscordChannelIntegrationInput;
};


export type MutationDeleteUserAuthSlackIntegrationArgs = {
  input: DeleteUserAuthSlackIntegrationInput;
};


export type MutationDeleteWebhookTargetArgs = {
  input: DeleteWebhookTargetInput;
};


export type MutationDeleteWorkflowRuleArgs = {
  input: DeleteWorkflowRuleInput;
};


export type MutationDeleteWorkspaceDiscordChannelIntegrationArgs = {
  input: DeleteWorkspaceDiscordChannelIntegrationInput;
};


export type MutationDeleteWorkspaceDiscordIntegrationArgs = {
  input: DeleteWorkspaceDiscordIntegrationInput;
};


export type MutationDeleteWorkspaceFileArgs = {
  input: DeleteWorkspaceFileInput;
};


export type MutationDeleteWorkspaceInviteArgs = {
  input: DeleteWorkspaceInviteInput;
};


export type MutationDeleteWorkspaceMsTeamsIntegrationArgs = {
  input: DeleteWorkspaceMsTeamsIntegrationInput;
};


export type MutationDeleteWorkspaceSlackChannelIntegrationArgs = {
  input: DeleteWorkspaceSlackChannelIntegrationInput;
};


export type MutationDeleteWorkspaceSlackIntegrationArgs = {
  input: DeleteWorkspaceSlackIntegrationInput;
};


export type MutationEscalateThreadArgs = {
  input: EscalateThreadInput;
};


export type MutationForkThreadArgs = {
  input: ForkThreadInput;
};


export type MutationGenerateHelpCenterArticleArgs = {
  input: GenerateHelpCenterArticleInput;
};


export type MutationInviteUserToWorkspaceArgs = {
  input: InviteUserToWorkspaceInput;
};


export type MutationMarkCustomerAsSpamArgs = {
  input: MarkCustomerAsSpamInput;
};


export type MutationMarkThreadAsDoneArgs = {
  input: MarkThreadAsDoneInput;
};


export type MutationMarkThreadAsTodoArgs = {
  input: MarkThreadAsTodoInput;
};


export type MutationMarkThreadDiscussionAsResolvedArgs = {
  input: MarkThreadDiscussionAsResolvedInput;
};


export type MutationMoveLabelTypeArgs = {
  input: MoveLabelTypeInput;
};


export type MutationPreviewBillingPlanChangeArgs = {
  input: PreviewBillingPlanChangeInput;
};


export type MutationRefreshConnectedDiscordChannelsArgs = {
  input: RefreshConnectedDiscordChannelsInput;
};


export type MutationRefreshWorkspaceSlackChannelIntegrationArgs = {
  input: RefreshWorkspaceSlackChannelIntegrationInput;
};


export type MutationReloadCustomerCardInstanceArgs = {
  input: ReloadCustomerCardInstanceInput;
};


export type MutationRemoveAdditionalAssigneesArgs = {
  input: RemoveAdditionalAssigneesInput;
};


export type MutationRemoveCustomerFromCustomerGroupsArgs = {
  input: RemoveCustomerFromCustomerGroupsInput;
};


export type MutationRemoveCustomerFromTenantsArgs = {
  input: RemoveCustomerFromTenantsInput;
};


export type MutationRemoveLabelsArgs = {
  input: RemoveLabelsInput;
};


export type MutationRemoveLabelsFromUserArgs = {
  input: RemoveLabelsFromUserInput;
};


export type MutationRemoveMembersFromTierArgs = {
  input: RemoveMembersFromTierInput;
};


export type MutationRemoveUserFromActiveBillingRotaArgs = {
  input: RemoveUserFromActiveBillingRotaInput;
};


export type MutationRemoveWorkspaceAlternateSupportEmailAddressArgs = {
  input: RemoveWorkspaceAlternateSupportEmailAddressInput;
};


export type MutationReorderAutorespondersArgs = {
  input: ReorderAutorespondersInput;
};


export type MutationReorderCustomerCardConfigsArgs = {
  input: ReorderCustomerCardConfigsInput;
};


export type MutationReorderCustomerSurveysArgs = {
  input: ReorderCustomerSurveysInput;
};


export type MutationReorderThreadFieldSchemasArgs = {
  input: ReorderThreadFieldSchemasInput;
};


export type MutationReplyToEmailArgs = {
  input: ReplyToEmailInput;
};


export type MutationReplyToThreadArgs = {
  input: ReplyToThreadInput;
};


export type MutationResolveCustomerForMsTeamsChannelArgs = {
  input: ResolveCustomerForMsTeamsChannelInput;
};


export type MutationResolveCustomerForSlackChannelArgs = {
  input: ResolveCustomerForSlackChannelInput;
};


export type MutationSendBulkEmailArgs = {
  input: SendBulkEmailInput;
};


export type MutationSendChatArgs = {
  input: SendChatInput;
};


export type MutationSendCustomerChatArgs = {
  input: SendCustomerChatInput;
};


export type MutationSendDiscordMessageArgs = {
  input: SendDiscordMessageInput;
};


export type MutationSendMsTeamsMessageArgs = {
  input: SendMsTeamsMessageInput;
};


export type MutationSendNewEmailArgs = {
  input: SendNewEmailInput;
};


export type MutationSendSlackMessageArgs = {
  input: SendSlackMessageInput;
};


export type MutationSendThreadDiscussionMessageArgs = {
  input: SendThreadDiscussionMessageInput;
};


export type MutationSetCustomerTenantsArgs = {
  input: SetCustomerTenantsInput;
};


export type MutationShareThreadToUserInSlackArgs = {
  input: ShareThreadToUserInSlackInput;
};


export type MutationSnoozeThreadArgs = {
  input: SnoozeThreadInput;
};


export type MutationStartServiceAuthorizationArgs = {
  input: StartServiceAuthorizationInput;
};


export type MutationSyncBusinessHoursSlotsArgs = {
  input: SyncBusinessHoursSlotsInput;
};


export type MutationToggleSlackMessageReactionArgs = {
  input: ToggleSlackMessageReactionInput;
};


export type MutationToggleWorkflowRulePublishedArgs = {
  input: ToggleWorkflowRulePublishedInput;
};


export type MutationUnarchiveLabelTypeArgs = {
  input: UnarchiveLabelTypeInput;
};


export type MutationUnassignThreadArgs = {
  input: UnassignThreadInput;
};


export type MutationUnmarkCustomerAsSpamArgs = {
  input: UnmarkCustomerAsSpamInput;
};


export type MutationUpdateActiveBillingRotaArgs = {
  input: UpdateActiveBillingRotaInput;
};


export type MutationUpdateApiKeyArgs = {
  input: UpdateApiKeyInput;
};


export type MutationUpdateAutoresponderArgs = {
  input: UpdateAutoresponderInput;
};


export type MutationUpdateChatAppArgs = {
  input: UpdateChatAppInput;
};


export type MutationUpdateCompanyTierArgs = {
  input: UpdateCompanyTierInput;
};


export type MutationUpdateConnectedDiscordChannelArgs = {
  input: UpdateConnectedDiscordChannelInput;
};


export type MutationUpdateConnectedSlackChannelArgs = {
  input: UpdateConnectedSlackChannelInput;
};


export type MutationUpdateCustomerCardConfigArgs = {
  input: UpdateCustomerCardConfigInput;
};


export type MutationUpdateCustomerCompanyArgs = {
  input: UpdateCustomerCompanyInput;
};


export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput;
};


export type MutationUpdateCustomerSurveyArgs = {
  input: UpdateCustomerSurveyInput;
};


export type MutationUpdateEscalationPathArgs = {
  input: UpdateEscalationPathInput;
};


export type MutationUpdateGeneratedReplyArgs = {
  input: UpdateGeneratedReplyInput;
};


export type MutationUpdateHelpCenterArgs = {
  input: UpdateHelpCenterInput;
};


export type MutationUpdateHelpCenterArticleGroupArgs = {
  input: UpdateHelpCenterArticleGroupInput;
};


export type MutationUpdateHelpCenterCustomDomainNameArgs = {
  input: UpdateHelpCenterCustomDomainNameInput;
};


export type MutationUpdateHelpCenterIndexArgs = {
  input: UpdateHelpCenterIndexInput;
};


export type MutationUpdateLabelTypeArgs = {
  input: UpdateLabelTypeInput;
};


export type MutationUpdateMachineUserArgs = {
  input: UpdateMachineUserInput;
};


export type MutationUpdateMyUserArgs = {
  input: UpdateMyUserInput;
};


export type MutationUpdateSavedThreadsViewArgs = {
  input: UpdateSavedThreadsViewInput;
};


export type MutationUpdateServiceLevelAgreementArgs = {
  input: UpdateServiceLevelAgreementInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationUpdateSnippetArgs = {
  input: UpdateSnippetInput;
};


export type MutationUpdateTenantTierArgs = {
  input: UpdateTenantTierInput;
};


export type MutationUpdateThreadEscalationPathArgs = {
  input: UpdateThreadEscalationPathInput;
};


export type MutationUpdateThreadFieldSchemaArgs = {
  input: UpdateThreadFieldSchemaInput;
};


export type MutationUpdateThreadTenantArgs = {
  input: UpdateThreadTenantInput;
};


export type MutationUpdateThreadTierArgs = {
  input: UpdateThreadTierInput;
};


export type MutationUpdateThreadTitleArgs = {
  input: UpdateThreadTitleInput;
};


export type MutationUpdateTierArgs = {
  input: UpdateTierInput;
};


export type MutationUpdateWebhookTargetArgs = {
  input: UpdateWebhookTargetInput;
};


export type MutationUpdateWorkflowRuleArgs = {
  input: UpdateWorkflowRuleInput;
};


export type MutationUpdateWorkspaceArgs = {
  input: UpdateWorkspaceInput;
};


export type MutationUpdateWorkspaceEmailSettingsArgs = {
  input: UpdateWorkspaceEmailSettingsInput;
};


export type MutationUpsertBusinessHoursArgs = {
  input: UpsertBusinessHoursInput;
};


export type MutationUpsertCompanyArgs = {
  input: UpsertCompanyInput;
};


export type MutationUpsertCustomerArgs = {
  input: UpsertCustomerInput;
};


export type MutationUpsertCustomerGroupArgs = {
  input: UpsertCustomerGroupInput;
};


export type MutationUpsertHelpCenterArticleArgs = {
  input: UpsertHelpCenterArticleInput;
};


export type MutationUpsertMyEmailSignatureArgs = {
  input: UpsertMyEmailSignatureInput;
};


export type MutationUpsertTenantArgs = {
  input: UpsertTenantInput;
};


export type MutationUpsertTenantFieldArgs = {
  input: UpsertTenantFieldInput;
};


export type MutationUpsertTenantFieldSchemaArgs = {
  input: UpsertTenantFieldSchemaInput;
};


export type MutationUpsertThreadFieldArgs = {
  input: UpsertThreadFieldInput;
};


export type MutationVerifyHelpCenterCustomDomainNameArgs = {
  input: VerifyHelpCenterCustomDomainNameInput;
};


export type MutationVerifyWorkspaceEmailForwardingSettingsArgs = {
  input: VerifyWorkspaceEmailForwardingSettingsInput;
};

/** A type indicating an error has occurred while making a mutation. */
export type MutationError = {
  __typename?: 'MutationError';
  /** A fixed error code that can be used to handle this error, see https://www.plain.com/docs/graphql-api/error-codes for a description of each code. */
  code: Scalars['String']['output'];
  /** The array of fields that are impacted by this error. */
  fields: Array<MutationFieldError>;
  /** An English technical description of the error. This error is usually meant to be read by a developer and not an end user. */
  message: Scalars['String']['output'];
  /** The type of error. Can be used to display a user friendly error message. */
  type: MutationErrorType;
};

/** An enum for why the mutation failed overall. */
export enum MutationErrorType {
  /** The user is not authorized to do this mutation. See `message` for details on which permissions are missing. */
  Forbidden = 'FORBIDDEN',
  /** An unknown internal server error occurred. Retry the mutation and if it persists, please email help@plain.com */
  Internal = 'INTERNAL',
  /** Input validation failed, see the `fields` for details on why the input was invalid. */
  Validation = 'VALIDATION'
}

/** A type indicating an error has occurred with a specific field in the input. */
export type MutationFieldError = {
  __typename?: 'MutationFieldError';
  /** The name of the field for which the error happened. */
  field: Scalars['String']['output'];
  /** An English technical description of the error. This error is usually meant to be read by a developer and not an end user. */
  message: Scalars['String']['output'];
  /** The type of the error. Can be used to display a user friendly error message. */
  type: MutationFieldErrorType;
};

/** An enum specific to each field, explaining why validation failed. */
export enum MutationFieldErrorType {
  /** The input field referenced an entity that wasn't found. */
  NotFound = 'NOT_FOUND',
  /** The field is required to be provided. String inputs may be trimmed and checked for emptiness. */
  Required = 'REQUIRED',
  /** The field was provided, but didn't pass the requirements of the field. See `message` for details on why. */
  Validation = 'VALIDATION'
}

export type NextResponseTimeServiceLevelAgreement = ServiceLevelAgreement & {
  __typename?: 'NextResponseTimeServiceLevelAgreement';
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  /** This SLA will breach if it does not receive a next response within this many minutes. */
  nextResponseTimeMinutes: Scalars['Int']['output'];
  threadLabelTypeIdFilter?: Maybe<ServiceLevelAgreementThreadLabelTypeIdFilter>;
  threadPriorityFilter: Array<Scalars['Int']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  useBusinessHoursOnly: Scalars['Boolean']['output'];
};

export type Note = {
  __typename?: 'Note';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: InternalActor;
  customer: Customer;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<InternalActor>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  markdown?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type NoteEntry = {
  __typename?: 'NoteEntry';
  attachments: Array<Attachment>;
  markdown?: Maybe<Scalars['String']['output']>;
  noteId: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

/** A number setting */
export type NumberSetting = {
  __typename?: 'NumberSetting';
  /** The setting code. */
  code: Scalars['String']['output'];
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  numberValue: Scalars['Int']['output'];
  /** The scope of the setting. */
  scope: SettingScope;
};

export type OptionalBooleanInput = {
  value?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptionalDependsOnThreadFieldInput = {
  value?: InputMaybe<DependsOnThreadFieldInput>;
};

export type OptionalGeneratedReplyFeedbackInput = {
  value?: InputMaybe<GeneratedReplyFeedbackType>;
};

export type OptionalStringInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  isAvailable: Scalars['Boolean']['output'];
};

export type PerSeatRecurringPrice = RecurringPrice & {
  __typename?: 'PerSeatRecurringPrice';
  billingIntervalCount: Scalars['Int']['output'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
  perSeatAmount: Scalars['Int']['output'];
};

export type Permissions = {
  __typename?: 'Permissions';
  permissions: Array<Scalars['String']['output']>;
};

export type PlainThreadLinkInput = {
  plainThreadId: Scalars['ID']['input'];
};

export type PlainThreadThreadLink = ThreadLink & {
  __typename?: 'PlainThreadThreadLink';
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  plainThreadId: Scalars['ID']['output'];
  plainThreadStatusDetailType: StatusDetailType;
  sourceId: Scalars['String']['output'];
  sourceType: Scalars['String']['output'];
  status: ThreadLinkStatus;
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type PreviewBillingPlanChangeInput = {
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  planKey: BillingPlanKey;
};

export type PreviewBillingPlanChangeOutput = {
  __typename?: 'PreviewBillingPlanChangeOutput';
  error?: Maybe<MutationError>;
  preview?: Maybe<BillingPlanChangePreview>;
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Int']['output'];
  currency: CurrencyCode;
};

export type PriceTier = {
  __typename?: 'PriceTier';
  flatAmount: Scalars['Int']['output'];
  maxSeats: Scalars['Int']['output'];
  perSeatAmount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** This API is in beta and may change without notice. */
  activeThreadCluster?: Maybe<ThreadCluster>;
  autoresponder?: Maybe<Autoresponder>;
  autoresponders: AutoresponderConnection;
  billingPlans: BillingPlanConnection;
  /** @deprecated Use businessHoursSlots instead. */
  businessHours?: Maybe<BusinessHours>;
  businessHoursSlots: Array<BusinessHoursSlot>;
  /** Get a chat app by id. */
  chatApp?: Maybe<ChatApp>;
  /** Get a chat app secret by chat app id. */
  chatAppSecret?: Maybe<ChatAppHiddenSecret>;
  /** List chat apps. */
  chatApps: ChatAppConnection;
  companies: CompanyConnection;
  company?: Maybe<Company>;
  /** Gets all Discord channels for this workspace, which match the specified filters. */
  connectedDiscordChannels: ConnectedDiscordChannelConnection;
  connectedMSTeamsChannels: ConnectedMsTeamsChannelConnection;
  connectedSlackChannel?: Maybe<ConnectedSlackChannel>;
  /** Gets all slack channels for this workspace, which match the specified filters. */
  connectedSlackChannels: ConnectedSlackChannelConnection;
  customer?: Maybe<Customer>;
  customerByEmail?: Maybe<Customer>;
  /** Get a customer by its external ID. A customer's external ID is unique within a workspace. */
  customerByExternalId?: Maybe<Customer>;
  customerCardConfig?: Maybe<CustomerCardConfig>;
  customerCardConfigs: Array<CustomerCardConfig>;
  /**
   * Loads the customer's card instances.
   *
   * This query will return any cards that are loaded and within their expiry time.
   * For cards that are past their expiry or are errored it will request a load of the cards and
   * return a `CustomerCardInstanceLoading`.
   *
   * A maximum of 25 card instances will be returned, due to only allowing 25 customer card configs.
   */
  customerCardInstances: Array<CustomerCardInstance>;
  /** Get a customer group by ID. */
  customerGroup?: Maybe<CustomerGroup>;
  /** Get a paginated list of customer groups. */
  customerGroups: CustomerGroupConnection;
  customerSurvey?: Maybe<CustomerSurvey>;
  customerSurveys: CustomerSurveyConnection;
  customers: CustomerConnection;
  escalationPath?: Maybe<EscalationPath>;
  escalationPaths: EscalationPathConnection;
  /** This API is in beta and may change without notice. */
  generatedReplies?: Maybe<Array<GeneratedReply>>;
  heatmapMetric?: Maybe<HeatmapMetric>;
  helpCenter?: Maybe<HelpCenter>;
  helpCenterArticle?: Maybe<HelpCenterArticle>;
  /** Get a help center article by its slug. */
  helpCenterArticleBySlug?: Maybe<HelpCenterArticle>;
  helpCenterArticleGroup?: Maybe<HelpCenterArticleGroup>;
  /** Get a help center article group by its slug. */
  helpCenterArticleGroupBySlug?: Maybe<HelpCenterArticleGroup>;
  helpCenterIndex?: Maybe<HelpCenterIndex>;
  helpCenters: HelpCenterConnection;
  indexedDocuments: IndexedDocumentConnection;
  issueTrackerFields: Array<IssueTrackerField>;
  knowledgeSource?: Maybe<KnowledgeSource>;
  knowledgeSources: KnowledgeSourceConnection;
  labelType?: Maybe<LabelType>;
  labelTypes: LabelTypeConnection;
  machineUser?: Maybe<MachineUser>;
  machineUsers: MachineUserConnection;
  myBillingRota?: Maybe<BillingRota>;
  myBillingSubscription?: Maybe<BillingSubscription>;
  myEmailSignature?: Maybe<EmailSignature>;
  myFavoritePages: FavoritePageConnection;
  myJiraIntegrationToken?: Maybe<JiraIntegrationToken>;
  myLinearInstallationInfo: UserLinearInstallationInfo;
  myLinearIntegration?: Maybe<UserLinearIntegration>;
  myLinearIntegrationToken?: Maybe<LinearIntegrationToken>;
  myMSTeamsInstallationInfo: UserMsTeamsInstallationInfo;
  myMSTeamsIntegration?: Maybe<UserMsTeamsIntegration>;
  myMachineUser?: Maybe<MachineUser>;
  myPaymentMethod?: Maybe<PaymentMethod>;
  myPermissions: Permissions;
  mySlackInstallationInfo: UserSlackInstallationInfo;
  mySlackIntegration?: Maybe<UserSlackIntegration>;
  myUser?: Maybe<User>;
  myUserAccount?: Maybe<UserAccount>;
  myWorkspace?: Maybe<Workspace>;
  myWorkspaceInvites: WorkspaceInviteConnection;
  myWorkspaces: WorkspaceConnection;
  permissions: Permissions;
  relatedThreads: Array<ThreadWithDistance>;
  roles: RoleConnection;
  savedThreadsView?: Maybe<SavedThreadsView>;
  savedThreadsViews: SavedThreadsViewConnection;
  searchCompanies: CompanySearchResultConnection;
  /**
   * Search for customers based on the provided query. Returned customers are sorted by how recently
   * they changed status (most recent first).
   */
  searchCustomers: CustomerSearchConnection;
  /**
   * Searches for slack users in a slack channel based on a search term.
   * The search term can be part of either the slack's handle or full name.
   */
  searchSlackUsers: SlackUserConnection;
  searchTenants: TenantSearchResultConnection;
  searchThreadLinkCandidates: ThreadLinkCandidateConnection;
  /**
   * Searches for slack users in a thread based on a search term.
   * The search term can be part of either the slack's handle or full name.
   */
  searchThreadSlackUsers: SlackUserConnection;
  searchThreads: ThreadSearchResultConnection;
  serviceAuthorization?: Maybe<ServiceAuthorization>;
  serviceAuthorizations: ServiceAuthorizationConnection;
  /** Gets a single setting based on the code and the scope. */
  setting?: Maybe<Setting>;
  singleValueMetric?: Maybe<SingleValueMetric>;
  /** Gets a single slack user within a channel based on their slack user ID. */
  slackUser?: Maybe<SlackUser>;
  snippet?: Maybe<Snippet>;
  snippets: SnippetConnection;
  /** List all the events types you can subscribe to. */
  subscriptionEventTypes: Array<SubscriptionEventType>;
  tenant?: Maybe<Tenant>;
  tenantFieldSchemas: TenantFieldSchemaConnection;
  tenants: TenantConnection;
  /** Get a thread by its ID. */
  thread?: Maybe<Thread>;
  /** Get a thread by its external ID. A thread's external ID is unique within a customer, hence why the customer ID is required. */
  threadByExternalId?: Maybe<Thread>;
  /** Get a thread by its ref. */
  threadByRef?: Maybe<Thread>;
  /** This API is in beta and may change without notice. */
  threadCluster?: Maybe<ThreadCluster>;
  /** This API is in beta and may change without notice. */
  threadClusters: Array<ThreadCluster>;
  /** This API is in beta and may change without notice. */
  threadClustersPaginated: ThreadClusterConnection;
  threadDiscussion?: Maybe<ThreadDiscussion>;
  threadFieldSchema?: Maybe<ThreadFieldSchema>;
  threadFieldSchemas: ThreadFieldSchemaConnection;
  threadLinkGroups: ThreadLinkGroupConnection;
  /** Gets a single slack user within a thread based on their slack user ID. */
  threadSlackUser?: Maybe<SlackUser>;
  threads: ThreadConnection;
  tier?: Maybe<Tier>;
  tiers: TierConnection;
  timeSeriesMetric?: Maybe<TimeSeriesMetric>;
  timelineEntries: TimelineEntryConnection;
  timelineEntry?: Maybe<TimelineEntry>;
  user?: Maybe<User>;
  userAuthDiscordChannelInstallationInfo: UserAuthDiscordChannelInstallationInfo;
  userAuthDiscordChannelIntegration?: Maybe<UserAuthDiscordChannelIntegration>;
  userAuthDiscordChannelIntegrations: UserAuthDiscordChannelIntegrationConnection;
  userAuthSlackInstallationInfo: UserAuthSlackInstallationInfo;
  userAuthSlackIntegration?: Maybe<UserAuthSlackIntegration>;
  userAuthSlackIntegrationByThreadId?: Maybe<UserAuthSlackIntegration>;
  /**
   * Returns a user by email or null if the user is not found.
   *
   * Deleted users are also returned, see isDeleted, deletedAt and deletedBy fields on the User type.
   */
  userByEmail?: Maybe<User>;
  users: UserConnection;
  /** Gets a webhook target. */
  webhookTarget?: Maybe<WebhookTarget>;
  /** List webhook targets. */
  webhookTargets: WebhookTargetConnection;
  /** List webhook versions. */
  webhookVersions: WebhookVersionConnection;
  /** Get a workflow rule by id. */
  workflowRule?: Maybe<WorkflowRule>;
  /** List workflow rules. */
  workflowRules: WorkflowRuleConnection;
  workspace?: Maybe<Workspace>;
  workspaceChatSettings: WorkspaceChatSettings;
  workspaceDiscordChannelInstallationInfo: WorkspaceDiscordChannelInstallationInfo;
  workspaceDiscordChannelIntegration?: Maybe<WorkspaceDiscordChannelIntegration>;
  workspaceDiscordChannelIntegrations: WorkspaceDiscordChannelIntegrationConnection;
  workspaceDiscordIntegration?: Maybe<WorkspaceDiscordIntegration>;
  workspaceDiscordIntegrations: WorkspaceDiscordIntegrationConnection;
  workspaceEmailSettings: WorkspaceEmailSettings;
  workspaceHmac?: Maybe<WorkspaceHmac>;
  workspaceInvites: WorkspaceInviteConnection;
  workspaceMSTeamsInstallationInfo: WorkspaceMsTeamsInstallationInfo;
  workspaceMSTeamsIntegration?: Maybe<WorkspaceMsTeamsIntegration>;
  workspaceSlackChannelInstallationInfo: WorkspaceSlackChannelInstallationInfo;
  workspaceSlackChannelIntegration?: Maybe<WorkspaceSlackChannelIntegration>;
  workspaceSlackChannelIntegrations: WorkspaceSlackChannelIntegrationConnection;
  workspaceSlackInstallationInfo: WorkspaceSlackInstallationInfo;
  workspaceSlackIntegration?: Maybe<WorkspaceSlackIntegration>;
  workspaceSlackIntegrations: WorkspaceSlackIntegrationConnection;
};


export type QueryActiveThreadClusterArgs = {
  threadId: Scalars['ID']['input'];
};


export type QueryAutoresponderArgs = {
  autoresponderId: Scalars['ID']['input'];
};


export type QueryAutorespondersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBillingPlansArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChatAppArgs = {
  chatAppId: Scalars['ID']['input'];
};


export type QueryChatAppSecretArgs = {
  chatAppId: Scalars['ID']['input'];
};


export type QueryChatAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CompaniesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompanyArgs = {
  companyId: Scalars['ID']['input'];
};


export type QueryConnectedDiscordChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  discordGuildId: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryConnectedMsTeamsChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryConnectedSlackChannelArgs = {
  connectedSlackChannelId: Scalars['ID']['input'];
};


export type QueryConnectedSlackChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ConnectedSlackChannelsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryCustomerByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryCustomerByExternalIdArgs = {
  externalId: Scalars['ID']['input'];
};


export type QueryCustomerCardConfigArgs = {
  customerCardConfigId: Scalars['ID']['input'];
};


export type QueryCustomerCardInstancesArgs = {
  customerId: Scalars['ID']['input'];
  threadId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCustomerGroupArgs = {
  customerGroupId: Scalars['ID']['input'];
};


export type QueryCustomerGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CustomerGroupsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCustomerSurveyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCustomerSurveysArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CustomersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CustomersSort>;
};


export type QueryEscalationPathArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEscalationPathsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGeneratedRepliesArgs = {
  options?: InputMaybe<Array<GenerateReplyOption>>;
  threadId: Scalars['ID']['input'];
};


export type QueryHeatmapMetricArgs = {
  name: Scalars['String']['input'];
  options?: InputMaybe<HeatmapMetricOptionsInput>;
};


export type QueryHelpCenterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHelpCenterArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHelpCenterArticleBySlugArgs = {
  helpCenterId: Scalars['ID']['input'];
  slug: Scalars['String']['input'];
};


export type QueryHelpCenterArticleGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHelpCenterArticleGroupBySlugArgs = {
  helpCenterId: Scalars['ID']['input'];
  slug: Scalars['String']['input'];
};


export type QueryHelpCenterIndexArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHelpCentersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIndexedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<IndexedDocumentsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryIssueTrackerFieldsArgs = {
  issueTrackerType: Scalars['String']['input'];
  selectedFields: Array<SelectedIssueTrackerField>;
};


export type QueryKnowledgeSourceArgs = {
  knowledgeSourceId: Scalars['ID']['input'];
};


export type QueryKnowledgeSourcesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<KnowledgeSourcesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLabelTypeArgs = {
  labelTypeId: Scalars['ID']['input'];
};


export type QueryLabelTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<LabelTypeFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMachineUserArgs = {
  machineUserId: Scalars['ID']['input'];
};


export type QueryMachineUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<MachineUsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyFavoritePagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyLinearInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryMyMsTeamsInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryMySlackInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryMyWorkspaceInvitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyWorkspacesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRelatedThreadsArgs = {
  threadId: Scalars['ID']['input'];
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySavedThreadsViewArgs = {
  savedThreadsViewId: Scalars['ID']['input'];
};


export type QuerySavedThreadsViewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<CompaniesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: CompaniesSearchQuery;
};


export type QuerySearchCustomersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: CustomersSearchQuery;
};


export type QuerySearchSlackUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: Scalars['String']['input'];
  slackChannelId: Scalars['String']['input'];
  slackTeamId: Scalars['String']['input'];
};


export type QuerySearchTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: TenantsSearchQuery;
};


export type QuerySearchThreadLinkCandidatesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters: ThreadLinkCandidateFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: Scalars['String']['input'];
};


export type QuerySearchThreadSlackUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};


export type QuerySearchThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ThreadsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  searchQuery: ThreadsSearchQuery;
};


export type QueryServiceAuthorizationArgs = {
  serviceAuthorizationId: Scalars['ID']['input'];
};


export type QueryServiceAuthorizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ServiceAuthorizationsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySettingArgs = {
  code: Scalars['String']['input'];
  scope: SettingScopeInput;
};


export type QuerySingleValueMetricArgs = {
  name: Scalars['String']['input'];
  options?: InputMaybe<SingleValueMetricOptions>;
};


export type QuerySlackUserArgs = {
  slackChannelId: Scalars['String']['input'];
  slackTeamId: Scalars['String']['input'];
  slackUserId: Scalars['ID']['input'];
};


export type QuerySnippetArgs = {
  snippetId: Scalars['ID']['input'];
};


export type QuerySnippetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTenantArgs = {
  tenantId: Scalars['ID']['input'];
};


export type QueryTenantFieldSchemasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<TenantFieldSchemasFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTenantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryThreadArgs = {
  threadId: Scalars['ID']['input'];
};


export type QueryThreadByExternalIdArgs = {
  customerId: Scalars['ID']['input'];
  externalId: Scalars['ID']['input'];
};


export type QueryThreadByRefArgs = {
  ref: Scalars['String']['input'];
};


export type QueryThreadClusterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryThreadClustersArgs = {
  variant?: InputMaybe<Scalars['String']['input']>;
};


export type QueryThreadClustersPaginatedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ThreadClustersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryThreadDiscussionArgs = {
  threadDiscussionId: Scalars['ID']['input'];
};


export type QueryThreadFieldSchemaArgs = {
  threadFieldSchemaId: Scalars['ID']['input'];
};


export type QueryThreadFieldSchemasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryThreadLinkGroupsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ThreadLinkGroupFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryThreadSlackUserArgs = {
  slackUserId: Scalars['ID']['input'];
  threadId: Scalars['ID']['input'];
};


export type QueryThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ThreadsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ThreadsSort>;
};


export type QueryTierArgs = {
  tierId: Scalars['ID']['input'];
};


export type QueryTiersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimeSeriesMetricArgs = {
  name: Scalars['String']['input'];
  options?: InputMaybe<TimeSeriesMetricOptions>;
};


export type QueryTimelineEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTimelineEntryArgs = {
  customerId: Scalars['ID']['input'];
  timelineEntryId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryUserAuthDiscordChannelInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryUserAuthDiscordChannelIntegrationArgs = {
  discordGuildId: Scalars['String']['input'];
};


export type QueryUserAuthDiscordChannelIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserAuthSlackInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
  slackTeamId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserAuthSlackIntegrationArgs = {
  slackTeamId: Scalars['String']['input'];
};


export type QueryUserAuthSlackIntegrationByThreadIdArgs = {
  threadId: Scalars['ID']['input'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWebhookTargetArgs = {
  webhookTargetId: Scalars['ID']['input'];
};


export type QueryWebhookTargetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWebhookVersionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkflowRuleArgs = {
  workflowRuleId: Scalars['ID']['input'];
};


export type QueryWorkflowRulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceArgs = {
  workspaceId: Scalars['ID']['input'];
};


export type QueryWorkspaceDiscordChannelInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryWorkspaceDiscordChannelIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};


export type QueryWorkspaceDiscordChannelIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceDiscordIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};


export type QueryWorkspaceDiscordIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceInvitesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceMsTeamsInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryWorkspaceSlackChannelInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryWorkspaceSlackChannelIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};


export type QueryWorkspaceSlackChannelIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkspaceSlackInstallationInfoArgs = {
  redirectUrl: Scalars['String']['input'];
};


export type QueryWorkspaceSlackIntegrationArgs = {
  integrationId: Scalars['ID']['input'];
};


export type QueryWorkspaceSlackIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type RecurringPrice = {
  billingIntervalCount: Scalars['Int']['output'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
};

export type RefreshConnectedDiscordChannelsInput = {
  discordGuildId: Scalars['String']['input'];
};

export type RefreshConnectedDiscordChannelsOutput = {
  __typename?: 'RefreshConnectedDiscordChannelsOutput';
  error?: Maybe<MutationError>;
};

export type RefreshWorkspaceSlackChannelIntegrationInput = {
  authCode: Scalars['String']['input'];
  integrationId: Scalars['ID']['input'];
  redirectUrl: Scalars['String']['input'];
};

export type RefreshWorkspaceSlackChannelIntegrationOutput = {
  __typename?: 'RefreshWorkspaceSlackChannelIntegrationOutput';
  error?: Maybe<MutationError>;
  integration?: Maybe<WorkspaceSlackChannelIntegration>;
};

export type RegenerateWorkspaceHmacOutput = {
  __typename?: 'RegenerateWorkspaceHmacOutput';
  error?: Maybe<MutationError>;
  workspaceHmac?: Maybe<WorkspaceHmac>;
};

export type ReloadCustomerCardInstanceInput = {
  customerCardConfigId: Scalars['ID']['input'];
  customerId: Scalars['ID']['input'];
  threadId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReloadCustomerCardInstanceOutput = {
  __typename?: 'ReloadCustomerCardInstanceOutput';
  /** The reloaded customer card instance. Currently this will always be a `CustomerCardInstanceLoading` type. */
  customerCardInstance?: Maybe<CustomerCardInstance>;
  error?: Maybe<MutationError>;
};

export type RemoveAdditionalAssigneesInput = {
  machineUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  threadId: Scalars['ID']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type RemoveAdditionalAssigneesOutput = {
  __typename?: 'RemoveAdditionalAssigneesOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type RemoveCustomerFromCustomerGroupsInput = {
  customerGroupIdentifiers: Array<CustomerGroupIdentifier>;
  customerId: Scalars['ID']['input'];
};

export type RemoveCustomerFromCustomerGroupsOutput = {
  __typename?: 'RemoveCustomerFromCustomerGroupsOutput';
  error?: Maybe<MutationError>;
};

export type RemoveCustomerFromTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type RemoveCustomerFromTenantsOutput = {
  __typename?: 'RemoveCustomerFromTenantsOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type RemoveLabelsFromUserInput = {
  labelIds: Array<Scalars['ID']['input']>;
};

export type RemoveLabelsFromUserOutput = {
  __typename?: 'RemoveLabelsFromUserOutput';
  error?: Maybe<MutationError>;
  labels: Array<Label>;
  user?: Maybe<User>;
};

export type RemoveLabelsInput = {
  labelIds: Array<Scalars['ID']['input']>;
};

export type RemoveLabelsOutput = {
  __typename?: 'RemoveLabelsOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type RemoveMembersFromTierInput = {
  memberIdentifiers: Array<TierMemberIdentifierInput>;
};

export type RemoveMembersFromTierOutput = {
  __typename?: 'RemoveMembersFromTierOutput';
  error?: Maybe<MutationError>;
  memberships: Array<TierMembership>;
};

export type RemoveUserFromActiveBillingRotaInput = {
  userId: Scalars['ID']['input'];
};

export type RemoveUserFromActiveBillingRotaOutput = {
  __typename?: 'RemoveUserFromActiveBillingRotaOutput';
  billingRota?: Maybe<BillingRota>;
  error?: Maybe<MutationError>;
};

export type RemoveWorkspaceAlternateSupportEmailAddressInput = {
  alternateSupportEmailAddress: Scalars['String']['input'];
};

export type RemoveWorkspaceAlternateSupportEmailAddressOutput = {
  __typename?: 'RemoveWorkspaceAlternateSupportEmailAddressOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type ReorderAutorespondersInput = {
  autorespondersOrder: Array<AutoresponderOrderInput>;
};

export type ReorderAutorespondersOutput = {
  __typename?: 'ReorderAutorespondersOutput';
  autoresponders?: Maybe<Array<Autoresponder>>;
  error?: Maybe<MutationError>;
};

export type ReorderCustomerCardConfigsInput = {
  /** An array of ordering updates. */
  customerCardConfigOrders: Array<CustomerCardConfigOrderInput>;
};

export type ReorderCustomerCardConfigsOutput = {
  __typename?: 'ReorderCustomerCardConfigsOutput';
  /** The reordered customer card configs. */
  customerCardConfigs?: Maybe<Array<CustomerCardConfig>>;
  error?: Maybe<MutationError>;
};

export type ReorderCustomerSurveysInput = {
  customerSurveyOrders: Array<CustomerSurveyOrderInput>;
};

export type ReorderCustomerSurveysOutput = {
  __typename?: 'ReorderCustomerSurveysOutput';
  customerSurveys?: Maybe<Array<CustomerSurvey>>;
  error?: Maybe<MutationError>;
};

export type ReorderThreadFieldSchemasInput = {
  threadFieldSchemaOrders: Array<ThreadFieldSchemaOrderInput>;
};

export type ReorderThreadFieldSchemasOutput = {
  __typename?: 'ReorderThreadFieldSchemasOutput';
  error?: Maybe<MutationError>;
  threadFieldSchemas?: Maybe<Array<ThreadFieldSchema>>;
};

export type ReplyToEmailInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** @deprecated Use inReplyToEmailId instead. */
  customerId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Optional field for alternate from email address. If provided, it will be used as the from address in the email.
   * It must match one of the workspace support email addresses (default or alternate).
   */
  fromAlternateSupportEmail?: InputMaybe<EmailParticipantInput>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  inReplyToEmailId: Scalars['ID']['input'];
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  textContent: Scalars['String']['input'];
};

export type ReplyToEmailOutput = {
  __typename?: 'ReplyToEmailOutput';
  email?: Maybe<Email>;
  error?: Maybe<MutationError>;
};

export type ReplyToThreadChannelSpecificOptionsInput = {
  email: ReplyToThreadEmailChannelSpecificOptionsInput;
};

export type ReplyToThreadEmailChannelSpecificOptionsInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
};

export type ReplyToThreadInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  channelSpecificOptions?: InputMaybe<ReplyToThreadChannelSpecificOptionsInput>;
  impersonation?: InputMaybe<ImpersonationInput>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  textContent: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};

export type ReplyToThreadOutput = {
  __typename?: 'ReplyToThreadOutput';
  error?: Maybe<MutationError>;
};

export type ResolveCustomerForMsTeamsChannelInput = {
  msTeamsChannelId: Scalars['ID']['input'];
  msTeamsTeamId: Scalars['ID']['input'];
};

export type ResolveCustomerForMsTeamsChannelOutput = {
  __typename?: 'ResolveCustomerForMSTeamsChannelOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type ResolveCustomerForSlackChannelInput = {
  slackChannelId: Scalars['String']['input'];
  slackTeamId: Scalars['String']['input'];
};

export type ResolveCustomerForSlackChannelOutput = {
  __typename?: 'ResolveCustomerForSlackChannelOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type Role = {
  __typename?: 'Role';
  /** @deprecated Don't use. Will be removed soon. */
  assignableBillingSeats: Array<BillingSeatType>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** @deprecated Use isAssignableToThread instead */
  isAssignableToCustomer: Scalars['Boolean']['output'];
  isAssignableToThread: Scalars['Boolean']['output'];
  key?: Maybe<RoleKey>;
  name: Scalars['String']['output'];
  permissions: Array<Scalars['String']['output']>;
  /** @deprecated Don't use. Will be removed soon. */
  requiresBillableSeat: Scalars['Boolean']['output'];
};

export type RoleChangeCost = {
  __typename?: 'RoleChangeCost';
  addingSeatType: BillingSeatType;
  /**
   * The total price delta for the remainder of the current billing period (i.e. prorated).
   * Could be negative (e.g. swapping member for viewer).
   */
  adjustedPrice: Price;
  /**
   * Total amount that will be invoiced immediately for the role change.
   * If this is negative, we would credit the amount to your account.
   */
  dueNowPrice: Price;
  /**
   * The total price delta for the entire subscription billing period (i.e. non-prorated).
   * Could be negative (e.g. swapping member for viewer).
   */
  fullPrice: Price;
  intervalCount: Scalars['Int']['output'];
  intervalUnit: BillingIntervalUnit;
  /** The number of seats. */
  quantity: Scalars['Int']['output'];
  removingSeatType?: Maybe<BillingSeatType>;
  /** Deprecated. Use fullPrice instead. */
  totalPrice: Price;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String']['output'];
  node: Role;
};

export enum RoleKey {
  Admin = 'ADMIN',
  None = 'NONE',
  Owner = 'OWNER',
  Support = 'SUPPORT',
  Viewer = 'VIEWER'
}

export type SavedThreadsView = {
  __typename?: 'SavedThreadsView';
  color: Scalars['String']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  threadsFilter: SavedThreadsViewFilter;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SavedThreadsViewConnection = {
  __typename?: 'SavedThreadsViewConnection';
  edges: Array<SavedThreadsViewEdge>;
  pageInfo: PageInfo;
};

export type SavedThreadsViewEdge = {
  __typename?: 'SavedThreadsViewEdge';
  cursor: Scalars['String']['output'];
  node: SavedThreadsView;
};

export type SavedThreadsViewFilter = {
  __typename?: 'SavedThreadsViewFilter';
  assignedToUser: Array<Scalars['ID']['output']>;
  companies: Array<Scalars['ID']['output']>;
  customerGroups: Array<Scalars['ID']['output']>;
  displayOptions: ThreadsDisplayOptions;
  groupBy: ThreadsGroupBy;
  labelTypeIds: Array<Scalars['ID']['output']>;
  layout: ThreadsLayout;
  messageSource: Array<MessageSource>;
  participants: Array<Scalars['ID']['output']>;
  priorities: Array<Scalars['Int']['output']>;
  slaStatuses: Array<Scalars['String']['output']>;
  slaTypes: Array<Scalars['String']['output']>;
  sort: SavedThreadsViewSort;
  statusDetails: Array<StatusDetailType>;
  statuses: Array<ThreadStatus>;
  supportEmailAddresses: Array<Scalars['String']['output']>;
  tenants: Array<Scalars['ID']['output']>;
  threadFields: Array<SavedThreadsViewFilterThreadField>;
  threadLinkGroupIds: Array<Scalars['ID']['output']>;
  tiers: Array<Scalars['ID']['output']>;
};

export type SavedThreadsViewFilterInput = {
  assignedToUser: Array<Scalars['ID']['input']>;
  companies: Array<Scalars['ID']['input']>;
  customerGroups: Array<Scalars['ID']['input']>;
  displayOptions: ThreadsDisplayOptionsInput;
  groupBy: ThreadsGroupBy;
  labelTypeIds: Array<Scalars['ID']['input']>;
  layout: ThreadsLayout;
  messageSource: Array<MessageSource>;
  participants: Array<Scalars['ID']['input']>;
  priorities: Array<Scalars['Int']['input']>;
  slaStatuses: Array<Scalars['String']['input']>;
  slaTypes: Array<Scalars['String']['input']>;
  sort: ThreadsSort;
  statusDetails: Array<StatusDetailType>;
  statuses: Array<ThreadStatus>;
  supportEmailAddresses: Array<Scalars['String']['input']>;
  tenants: Array<Scalars['ID']['input']>;
  threadFields: Array<ThreadFieldFilter>;
  threadLinkGroupIds: Array<Scalars['ID']['input']>;
  tiers: Array<Scalars['ID']['input']>;
};

export type SavedThreadsViewFilterThreadField = {
  __typename?: 'SavedThreadsViewFilterThreadField';
  booleanValue?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  stringValue?: Maybe<Scalars['String']['output']>;
};

export type SavedThreadsViewSort = {
  __typename?: 'SavedThreadsViewSort';
  direction?: Maybe<SortDirection>;
  field?: Maybe<ThreadsSortField>;
};

export type SelectedIssueTrackerField = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type SendBulkEmailInput = {
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  textContent: Scalars['String']['input'];
  threadIds: Array<Scalars['ID']['input']>;
};

export type SendBulkEmailOutput = {
  __typename?: 'SendBulkEmailOutput';
  error?: Maybe<MutationError>;
};

export type SendChatInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerId: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  threadId?: InputMaybe<Scalars['ID']['input']>;
  /** When provided, this will override the timestamp of the chat. Useful when backfilling messages. Must be in ISO 8601 format (e.g. 2024-10-28T18:30:00Z). */
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type SendChatOutput = {
  __typename?: 'SendChatOutput';
  chat?: Maybe<Chat>;
  error?: Maybe<MutationError>;
};

export type SendCustomerChatInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerId: Scalars['ID']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
  /** When provided, this will override the timestamp of the chat. Useful when backfilling messages. Must be in ISO 8601 format (e.g. 2024-10-28T18:30:00Z). */
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type SendCustomerChatOutput = {
  __typename?: 'SendCustomerChatOutput';
  chat?: Maybe<Chat>;
  error?: Maybe<MutationError>;
};

export type SendDiscordMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
};

export type SendDiscordMessageOutput = {
  __typename?: 'SendDiscordMessageOutput';
  discordMessage?: Maybe<DiscordMessage>;
  error?: Maybe<MutationError>;
};

export type SendMsTeamsMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
};

export type SendMsTeamsMessageOutput = {
  __typename?: 'SendMSTeamsMessageOutput';
  error?: Maybe<MutationError>;
  msTeamsMessage?: Maybe<MsTeamsMessage>;
};

export type SendNewEmailInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customerId: Scalars['ID']['input'];
  /**
   * Optional field for alternate from email address. If provided, it will be used as the from address in the email.
   * It must match one of the workspace support email addresses (default or alternate).
   */
  fromAlternateSupportEmail?: InputMaybe<EmailParticipantInput>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  textContent: Scalars['String']['input'];
  /** If provided this will add the new email to an existing thread. If not provided, a new thread will be created. */
  threadId?: InputMaybe<Scalars['ID']['input']>;
};

export type SendNewEmailOutput = {
  __typename?: 'SendNewEmailOutput';
  email?: Maybe<Email>;
  error?: Maybe<MutationError>;
};

export type SendSlackMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  markdownContent?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Use markdownContent instead */
  textContent?: InputMaybe<Scalars['String']['input']>;
  threadId: Scalars['ID']['input'];
  unfurlLinks?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SendSlackMessageOutput = {
  __typename?: 'SendSlackMessageOutput';
  error?: Maybe<MutationError>;
};

export type SendThreadDiscussionMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  markdownContent: Scalars['String']['input'];
  threadDiscussionId: Scalars['ID']['input'];
};

export type SendThreadDiscussionMessageOutput = {
  __typename?: 'SendThreadDiscussionMessageOutput';
  error?: Maybe<MutationError>;
  threadDiscussionMessage?: Maybe<ThreadDiscussionMessage>;
};

export enum SentimentType {
  Negative = 'NEGATIVE',
  Neutral = 'NEUTRAL',
  Positive = 'POSITIVE'
}

export type ServiceAuthorization = {
  __typename?: 'ServiceAuthorization';
  connectedAt: DateTime;
  connectedBy: InternalActor;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  serviceIntegration: ServiceIntegration;
  status: ServiceAuthorizationStatus;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ServiceAuthorizationConnection = {
  __typename?: 'ServiceAuthorizationConnection';
  edges: Array<ServiceAuthorizationEdge>;
  pageInfo: PageInfo;
};

export type ServiceAuthorizationConnectionDetails = {
  __typename?: 'ServiceAuthorizationConnectionDetails';
  hmacDigest: Scalars['String']['output'];
  serviceAuthorizationId: Scalars['ID']['output'];
  /** One of: zendesk, salesforce, freshdesk, helpscout-mailbox, hubspot, jira. */
  serviceIntegrationKey: Scalars['String']['output'];
};

export type ServiceAuthorizationEdge = {
  __typename?: 'ServiceAuthorizationEdge';
  cursor: Scalars['String']['output'];
  node: ServiceAuthorization;
};

/**
 * The status of the service authorization. The status transitions are as follows:
 * PENDING_AUTH → COMPLETE_AUTH → CONNECTED ↔ REINSTALL_REQUIRED
 *
 * There is no
 */
export enum ServiceAuthorizationStatus {
  /**
   * User has completed the service authorization, but the service is not yet ready for use.
   * This happens when the service requires additional configuration (e.g. creating webhooks
   * in the service).
   * This is a transient state that typically lasts for a few seconds. Plain will automatically
   * attempt to configure the service, and transition to CONNECTED or REINSTALL_REQUIRED.
   */
  CompletedAuth = 'COMPLETED_AUTH',
  /** Service authorization is connected and ready for use. */
  Connected = 'CONNECTED',
  /** Service authorization was requested, but the user has not yet completed the authorization. */
  PendingAuth = 'PENDING_AUTH',
  /**
   * Service authorization was revoked, this typically happen when the Plain integration is removed
   * from the service. Plain keeps the service authorization to allow for reconnection without
   * losing the service's configuration.
   */
  ReinstallRequired = 'REINSTALL_REQUIRED'
}

export type ServiceAuthorizationsFilter = {
  /** One of: zendesk, salesforce, freshdesk, helpscout-mailbox, hubspot, jira. */
  serviceIntegrationKey?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceIntegration = {
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ServiceLevelAgreement = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  /** This SLA can only be applied to a thread if it has one of these label types. */
  threadLabelTypeIdFilter?: Maybe<ServiceLevelAgreementThreadLabelTypeIdFilter>;
  /** This SLA can only be applied to a thread if it has one of these priority values. */
  threadPriorityFilter: Array<Scalars['Int']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly: Scalars['Boolean']['output'];
};

export type ServiceLevelAgreementFilter = {
  statuses?: InputMaybe<Array<ServiceLevelAgreementStatus>>;
  types?: InputMaybe<Array<ServiceLevelAgreementType>>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export type ServiceLevelAgreementInput = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions: Array<BreachActionInput>;
  /** Set this to configure the firt response time SLA. */
  firstResponseTimeMinutes?: InputMaybe<Scalars['Int']['input']>;
  /** Set this to configure an SLA for next responses. */
  nextResponseTimeMinutes?: InputMaybe<Scalars['Int']['input']>;
  /** This SLA can only be applied to a thread if it has one or all of these label types. If not provided, the filter is not applied. */
  threadLabelTypeIdFilter?: InputMaybe<ServiceLevelAgreementThreadLabelTypeIdFilterInput>;
  /** This SLA can only be applied to a thread if it has one of these priority values. If not provided, it defaults to all priorities (0, 1, 2 and 3). */
  threadPriorityFilter?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly: Scalars['Boolean']['input'];
};

export enum ServiceLevelAgreementStatus {
  Achieved = 'ACHIEVED',
  Breached = 'BREACHED',
  Breaching = 'BREACHING',
  Cancelled = 'CANCELLED',
  ImminentBreach = 'IMMINENT_BREACH',
  Pending = 'PENDING'
}

export type ServiceLevelAgreementStatusDetail = ServiceLevelAgreementStatusDetailAchieved | ServiceLevelAgreementStatusDetailBreached | ServiceLevelAgreementStatusDetailBreaching | ServiceLevelAgreementStatusDetailCancelled | ServiceLevelAgreementStatusDetailImminentBreach | ServiceLevelAgreementStatusDetailPending;

export type ServiceLevelAgreementStatusDetailAchieved = {
  __typename?: 'ServiceLevelAgreementStatusDetailAchieved';
  /** The time when this SLA was achieved. */
  achievedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailBreached = {
  __typename?: 'ServiceLevelAgreementStatusDetailBreached';
  /** The time when this SLA breached. */
  breachedAt: DateTime;
  /** The time when we completed this breached SLA. */
  completedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailBreaching = {
  __typename?: 'ServiceLevelAgreementStatusDetailBreaching';
  /** The time when this SLA breached. */
  breachedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailCancelled = {
  __typename?: 'ServiceLevelAgreementStatusDetailCancelled';
  /** The time when this SLA was cancelled. */
  cancelledAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailImminentBreach = {
  __typename?: 'ServiceLevelAgreementStatusDetailImminentBreach';
  /** The time when this SLA will breach. */
  breachingAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailPending = {
  __typename?: 'ServiceLevelAgreementStatusDetailPending';
  /** The time when this SLA will breach. */
  breachingAt: DateTime;
};

export type ServiceLevelAgreementStatusSummary = {
  __typename?: 'ServiceLevelAgreementStatusSummary';
  firstResponseTime?: Maybe<ServiceLevelAgreementStatusDetail>;
  nextResponseTime?: Maybe<ServiceLevelAgreementStatusDetail>;
};

export type ServiceLevelAgreementStatusTransitionedEntry = {
  __typename?: 'ServiceLevelAgreementStatusTransitionedEntry';
  nextStatus: ServiceLevelAgreementStatus;
  previousStatus: ServiceLevelAgreementStatus;
  serviceLevelAgreement?: Maybe<ServiceLevelAgreement>;
};

export type ServiceLevelAgreementThreadLabelTypeIdFilter = {
  __typename?: 'ServiceLevelAgreementThreadLabelTypeIdFilter';
  /** The label type IDs that the thread needs to have in order for the SLA to be applied. Based on the 'requireAll' field. */
  labelTypeIds: Array<Scalars['ID']['output']>;
  /** If true, the SLA will only be applied to threads that have all of the provided label types. If false, the SLA will be applied to threads that have any of the provided label types. */
  requireAll: Scalars['Boolean']['output'];
};

export type ServiceLevelAgreementThreadLabelTypeIdFilterInput = {
  /** The label type IDs that the thread needs to have in order for the SLA to be applied. Based on the 'requireAll' field. */
  labelTypeIds: Array<Scalars['ID']['input']>;
  /** If true, the SLA will only be applied to threads that have all of the provided label types. If false, the SLA will be applied to threads that have any of the provided label types. */
  requireAll: Scalars['Boolean']['input'];
};

export enum ServiceLevelAgreementType {
  FirstResponseTime = 'FIRST_RESPONSE_TIME',
  NextResponseTime = 'NEXT_RESPONSE_TIME'
}

export type SetCustomerTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type SetCustomerTenantsOutput = {
  __typename?: 'SetCustomerTenantsOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

/** A union of different types of settings. */
export type Setting = BooleanSetting | NumberSetting | StringArraySetting | StringSetting;

export type SettingScope = {
  __typename?: 'SettingScope';
  id?: Maybe<Scalars['ID']['output']>;
  scopeType: SettingScopeType;
};

/** An input to specify the scope for a setting. */
export type SettingScopeInput = {
  /** An optional ID input. Depends on the type of scope if this is required. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Determines the type of the scope. */
  scopeType: SettingScopeType;
};

/** An enum to describe the type of scope the setting is for. */
export enum SettingScopeType {
  /**
   * Scope for any chat application settings
   * An `id` is mandatory and should be a chat application id (`liveChatApp_123`)
   */
  Chat = 'CHAT',
  /**
   * Scope for any user level settings
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  User = 'USER',
  /**
   * Scope for the authenticated user's email notification settings.
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  UserEmailNotifications = 'USER_EMAIL_NOTIFICATIONS',
  /**
   * Scope for the authenticated user's slack notification settings.
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  UserSlackNotifications = 'USER_SLACK_NOTIFICATIONS',
  /**
   * Scope for workspace level settings for the whole workspace.
   * An `id` is not needed as it will implicitly be the current workspace id.
   */
  Workspace = 'WORKSPACE',
  /**
   * Scope for discord notifications configured for the whole workspace.
   * An `id` is mandatory and should be a workspace discord integration id (`wsDiscordInt_123`)
   */
  WorkspaceDiscordNotifications = 'WORKSPACE_DISCORD_NOTIFICATIONS',
  /**
   * Scope for slack support channel settings.
   * An `id` is mandatory and should be a workspace slack channel integration id (`wsSlackInt_123`)
   */
  WorkspaceSlackChannel = 'WORKSPACE_SLACK_CHANNEL',
  /**
   * Scope for slack notifications configured for the whole workspace.
   * An `id` is mandatory and should be a workspace slack integration id (`wsSlackInt_123`)
   */
  WorkspaceSlackNotifications = 'WORKSPACE_SLACK_NOTIFICATIONS'
}

/**
 * An input "union" where exactly one field may be be provided as an input.
 * Current API only supports booleans but as the API expands more optional fields will be added.
 */
export type SettingValueInput = {
  /** If the setting value is a boolean then this field should be set. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** If the setting value is a number then this field should be set */
  number?: InputMaybe<Scalars['Int']['input']>;
  /** If the setting value is a string then this field should be set. */
  string?: InputMaybe<Scalars['String']['input']>;
  /** If the setting value is a string array then this field should be set. */
  stringArray?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ShareThreadToUserInSlackInput = {
  threadId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type ShareThreadToUserInSlackOutput = {
  __typename?: 'ShareThreadToUserInSlackOutput';
  error?: Maybe<MutationError>;
};

export type SingleValueMetric = {
  __typename?: 'SingleValueMetric';
  values: Array<SingleValueMetricValue>;
};

export type SingleValueMetricFilters = {
  csatRating?: InputMaybe<Scalars['Int']['input']>;
  csatSurveyId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type SingleValueMetricOptions = {
  dimension?: InputMaybe<MetricDimensionType>;
  filters?: InputMaybe<SingleValueMetricFilters>;
  /** Defaults to 24 hours ago. */
  from?: InputMaybe<Scalars['String']['input']>;
  subDimension?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type SingleValueMetricValue = {
  __typename?: 'SingleValueMetricValue';
  dimension?: Maybe<MetricDimension>;
  userId?: Maybe<Scalars['ID']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type SlackCustomerIdentity = {
  __typename?: 'SlackCustomerIdentity';
  slackUserId: Scalars['String']['output'];
};

export type SlackMessageEntry = {
  __typename?: 'SlackMessageEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID']['output'];
  deletedOnSlackAt?: Maybe<DateTime>;
  lastEditedOnSlackAt?: Maybe<DateTime>;
  reactions: Array<SlackReaction>;
  relatedThread?: Maybe<SlackMessageEntryRelatedThread>;
  slackMessageLink: Scalars['String']['output'];
  slackWebMessageLink: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type SlackMessageEntryRelatedThread = {
  __typename?: 'SlackMessageEntryRelatedThread';
  threadId: Scalars['ID']['output'];
};

export type SlackReaction = {
  __typename?: 'SlackReaction';
  actors: Array<Actor>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type SlackReplyEntry = {
  __typename?: 'SlackReplyEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID']['output'];
  deletedOnSlackAt?: Maybe<DateTime>;
  lastEditedOnSlackAt?: Maybe<DateTime>;
  reactions: Array<SlackReaction>;
  slackMessageLink: Scalars['String']['output'];
  slackWebMessageLink: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type SlackThreadChannelAssociation = ThreadChannelAssociation & {
  __typename?: 'SlackThreadChannelAssociation';
  companyId?: Maybe<Scalars['ID']['output']>;
  connectedSlackChannelId: Scalars['ID']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SlackThreadChannelDetails = {
  __typename?: 'SlackThreadChannelDetails';
  slackChannelId: Scalars['String']['output'];
  slackChannelName: Scalars['String']['output'];
  slackTeamId: Scalars['String']['output'];
  slackTeamName: Scalars['String']['output'];
};

export type SlackThreadChannelDetailsInput = {
  slackChannelId: Scalars['ID']['input'];
  slackTeamId: Scalars['ID']['input'];
};

export type SlackUser = {
  __typename?: 'SlackUser';
  createdAt: DateTime;
  createdBy: InternalActor;
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isInChannel: Scalars['Boolean']['output'];
  slackAvatarUrl72px?: Maybe<Scalars['String']['output']>;
  slackHandle: Scalars['String']['output'];
  slackUserId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SlackUserConnection = {
  __typename?: 'SlackUserConnection';
  edges: Array<SlackUserEdge>;
  pageInfo: PageInfo;
};

export type SlackUserEdge = {
  __typename?: 'SlackUserEdge';
  cursor: Scalars['String']['output'];
  node: SlackUser;
};

export type SlackUserIdentity = {
  __typename?: 'SlackUserIdentity';
  slackTeamId: Scalars['String']['output'];
  slackUserId: Scalars['String']['output'];
};

export type Snippet = {
  __typename?: 'Snippet';
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<InternalActor>;
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  markdown?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  path?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SnippetConnection = {
  __typename?: 'SnippetConnection';
  edges: Array<SnippetEdge>;
  pageInfo: PageInfo;
};

export type SnippetEdge = {
  __typename?: 'SnippetEdge';
  cursor: Scalars['String']['output'];
  node: Snippet;
};

export enum SnoozeStatusDetail {
  WaitingForCustomer = 'WAITING_FOR_CUSTOMER',
  WaitingForDuration = 'WAITING_FOR_DURATION'
}

export type SnoozeThreadInput = {
  durationSeconds?: InputMaybe<Scalars['Int']['input']>;
  statusDetail?: InputMaybe<SnoozeStatusDetail>;
  threadId: Scalars['ID']['input'];
};

export type SnoozeThreadOutput = {
  __typename?: 'SnoozeThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StartServiceAuthorizationInput = {
  /** One of: zendesk, salesforce, freshdesk, helpscout-mailbox, hubspot, jira, shortcut. */
  serviceIntegrationKey: Scalars['String']['input'];
};

export type StartServiceAuthorizationOutput = {
  __typename?: 'StartServiceAuthorizationOutput';
  connectionDetails?: Maybe<ServiceAuthorizationConnectionDetails>;
  error?: Maybe<MutationError>;
};

export enum StatusDetailType {
  Created = 'CREATED',
  DoneAutomaticallySet = 'DONE_AUTOMATICALLY_SET',
  DoneManuallySet = 'DONE_MANUALLY_SET',
  Ignored = 'IGNORED',
  InProgress = 'IN_PROGRESS',
  NewReply = 'NEW_REPLY',
  ThreadDiscussionResolved = 'THREAD_DISCUSSION_RESOLVED',
  ThreadLinkUpdated = 'THREAD_LINK_UPDATED',
  /** @deprecated Use DONE_AUTOMATICALLY_SET instead. */
  TimerExpired = 'TIMER_EXPIRED',
  WaitingForCustomer = 'WAITING_FOR_CUSTOMER',
  WaitingForDuration = 'WAITING_FOR_DURATION'
}

/** A string array setting */
export type StringArraySetting = {
  __typename?: 'StringArraySetting';
  /** The setting code. */
  code: Scalars['String']['output'];
  /** The scope of the setting. */
  scope: SettingScope;
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  stringArrayValue: Array<Scalars['String']['output']>;
};

export type StringInput = {
  value: Scalars['String']['input'];
};

/**
 * The different ways in which a string is matched.
 * Exactly one of these must be provided in a single search expression.
 */
export type StringSearchExpression = {
  /** Case-insensitive match values containing the provided string. */
  caseInsensitiveContains?: InputMaybe<Scalars['String']['input']>;
};

/** A string setting */
export type StringSetting = {
  __typename?: 'StringSetting';
  /** The setting code. */
  code: Scalars['String']['output'];
  /** The scope of the setting. */
  scope: SettingScope;
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  stringValue: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  customerCardInstanceChanges: CustomerCardInstanceChangesResult;
  customerChanges: CustomerChange;
  threadChanges: ThreadChange;
  threadFieldSchemaChanges: ThreadFieldSchemaChange;
  threadTimelineChanges: TimelineEntryChange;
  timelineChanges: TimelineEntryChange;
  userChanges: UserChange;
};


export type SubscriptionCustomerCardInstanceChangesArgs = {
  customerId: Scalars['ID']['input'];
};


export type SubscriptionCustomerChangesArgs = {
  filters?: InputMaybe<CustomerChangesFilter>;
};


export type SubscriptionThreadTimelineChangesArgs = {
  threadId: Scalars['ID']['input'];
};


export type SubscriptionTimelineChangesArgs = {
  customerId: Scalars['ID']['input'];
};

export type SubscriptionAcknowledgement = {
  __typename?: 'SubscriptionAcknowledgement';
  subscriptionId: Scalars['ID']['output'];
};

export type SubscriptionEventType = {
  __typename?: 'SubscriptionEventType';
  description: Scalars['String']['output'];
  eventType: Scalars['String']['output'];
};

export type SupportEmailAddressEmailActor = {
  __typename?: 'SupportEmailAddressEmailActor';
  supportEmailAddress: Scalars['String']['output'];
};

export type SurveyResponse = {
  __typename?: 'SurveyResponse';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: DateTime;
  createdBy: Actor;
  id: Scalars['ID']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  respondedAt?: Maybe<DateTime>;
  sentiment?: Maybe<SentimentType>;
  surveyId?: Maybe<Scalars['ID']['output']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type SurveyResponseFilter = {
  /** Filter for threads with any survey response, regardless of the specific values */
  hasResponse?: InputMaybe<Scalars['Boolean']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  responseAt?: InputMaybe<DatetimeFilter>;
  sentiment?: InputMaybe<SentimentType>;
  surveyId?: InputMaybe<Scalars['ID']['input']>;
};

export type SyncBusinessHoursSlotsInput = {
  slots: Array<BusinessHoursSlotInput>;
};

export type SyncBusinessHoursSlotsOutput = {
  __typename?: 'SyncBusinessHoursSlotsOutput';
  error?: Maybe<MutationError>;
  slots: Array<BusinessHoursSlot>;
};

export type System = {
  __typename?: 'System';
  id: Scalars['ID']['output'];
};

export type SystemActor = {
  __typename?: 'SystemActor';
  systemId: Scalars['ID']['output'];
};

export type Tenant = {
  __typename?: 'Tenant';
  createdAt: DateTime;
  createdBy: InternalActor;
  externalId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tenantFields: Array<TenantField>;
  tier?: Maybe<Tier>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url?: Maybe<Scalars['String']['output']>;
};

export type TenantConnection = {
  __typename?: 'TenantConnection';
  edges: Array<TenantEdge>;
  pageInfo: PageInfo;
};

export type TenantEdge = {
  __typename?: 'TenantEdge';
  cursor: Scalars['String']['output'];
  node: Tenant;
};

export type TenantField = {
  __typename?: 'TenantField';
  createdAt: DateTime;
  createdBy: InternalActor;
  externalFieldId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  value: TenantFieldValue;
};

export type TenantFieldBooleanValue = {
  __typename?: 'TenantFieldBooleanValue';
  booleanValue: Scalars['Boolean']['output'];
};

export type TenantFieldDateTimeValue = {
  __typename?: 'TenantFieldDateTimeValue';
  dateValue: DateTime;
};

export type TenantFieldFilter = {
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  dateValue?: InputMaybe<Scalars['String']['input']>;
  externalFieldId: Scalars['String']['input'];
  numberValue?: InputMaybe<Scalars['Float']['input']>;
  stringArrayValue?: InputMaybe<Array<Scalars['String']['input']>>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
};

export type TenantFieldIdentifier = {
  externalFieldId: Scalars['ID']['input'];
  tenantId: Scalars['ID']['input'];
};

export type TenantFieldNumberValue = {
  __typename?: 'TenantFieldNumberValue';
  numberValue: Scalars['Float']['output'];
};

export type TenantFieldSchema = {
  __typename?: 'TenantFieldSchema';
  createdAt: DateTime;
  createdBy: InternalActor;
  externalFieldId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  isVisible: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  options?: Maybe<Array<Scalars['String']['output']>>;
  order: Scalars['Int']['output'];
  source: Scalars['String']['output'];
  type: TenantFieldType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type TenantFieldSchemaConnection = {
  __typename?: 'TenantFieldSchemaConnection';
  edges: Array<TenantFieldSchemaEdge>;
  pageInfo: PageInfo;
};

export type TenantFieldSchemaEdge = {
  __typename?: 'TenantFieldSchemaEdge';
  cursor: Scalars['String']['output'];
  node: TenantFieldSchema;
};

export type TenantFieldSchemaInput = {
  externalFieldId: Scalars['ID']['input'];
  isVisible: Scalars['Boolean']['input'];
  label: Scalars['String']['input'];
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  order: Scalars['Int']['input'];
  source: Scalars['String']['input'];
  type: TenantFieldType;
};

export type TenantFieldSchemasFilter = {
  source?: InputMaybe<Scalars['String']['input']>;
};

export type TenantFieldStringArrayValue = {
  __typename?: 'TenantFieldStringArrayValue';
  arrayValue: Array<Scalars['String']['output']>;
};

export type TenantFieldStringValue = {
  __typename?: 'TenantFieldStringValue';
  stringValue: Scalars['String']['output'];
};

export enum TenantFieldType {
  BooleanType = 'BOOLEAN_TYPE',
  DatetimeType = 'DATETIME_TYPE',
  NumberType = 'NUMBER_TYPE',
  StringArray = 'STRING_ARRAY',
  StringType = 'STRING_TYPE'
}

export type TenantFieldValue = TenantFieldBooleanValue | TenantFieldDateTimeValue | TenantFieldNumberValue | TenantFieldStringArrayValue | TenantFieldStringValue;

export type TenantIdentifierInput = {
  externalId?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};

export type TenantSearchResult = {
  __typename?: 'TenantSearchResult';
  tenant: Tenant;
};

export type TenantSearchResultConnection = {
  __typename?: 'TenantSearchResultConnection';
  edges: Array<TenantSearchResultEdge>;
  pageInfo: PageInfo;
};

export type TenantSearchResultEdge = {
  __typename?: 'TenantSearchResultEdge';
  cursor: Scalars['String']['output'];
  node: TenantSearchResult;
};

export type TenantTierMembership = {
  __typename?: 'TenantTierMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  tenantId: Scalars['ID']['output'];
  tierId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** Query to search for tenants. */
export type TenantsSearchQuery = {
  /**
   * The term to search for. It must be at least 2 characters long. The search is case-insensitive on these two fields:
   * - the tenant name (partial match)
   * - the tenant external id (exact match)
   */
  term: Scalars['String']['input'];
};

/** A thread represents a conversation with a customer, around a specific topic. */
export type Thread = {
  __typename?: 'Thread';
  /** Additional assignees for this thread. */
  additionalAssignees: Array<ThreadAssignee>;
  /** The datetime when this thread was last assigned to someone or something. */
  assignedAt?: Maybe<DateTime>;
  /** Who or what this thread is assigned to. */
  assignedTo?: Maybe<ThreadAssignee>;
  /** The channel this thread belongs to. */
  channel: ThreadChannel;
  /** Details about the channel this thread is on. */
  channelDetails?: Maybe<ThreadChannelDetails>;
  /** The datetime when this thread was created. */
  createdAt: DateTime;
  /** The actor who created this thread. */
  createdBy: Actor;
  /** The customer involved in this thread. */
  customer: Customer;
  /** The description of this thread. */
  description?: Maybe<Scalars['String']['output']>;
  /** The escalation details for this thread. */
  escalationDetails?: Maybe<ThreadEscalationDetails>;
  /** The external ID of this thread. You can use this field to store your own unique identifier for this thread. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** First inbound message on the thread. */
  firstInboundMessageInfo?: Maybe<ThreadMessageInfo>;
  /** First outbound message on the thread. */
  firstOutboundMessageInfo?: Maybe<ThreadMessageInfo>;
  /** The unique identifier of the thread. */
  id: Scalars['ID']['output'];
  /** The labels attached to this thread. */
  labels: Array<Label>;
  /** Last inbound message received. */
  lastInboundMessageInfo?: Maybe<ThreadMessageInfo>;
  /** Last outbound message received. */
  lastOutboundMessageInfo?: Maybe<ThreadMessageInfo>;
  /** The links attached to this thread. */
  links: ThreadLinkConnection;
  /** The participants in this thread. */
  participants: ActorConnection;
  /** The preview text of the thread reflects the current state of the thread. As such, it might be updated when new activity happens in the thread. */
  previewText?: Maybe<Scalars['String']['output']>;
  /** The priority of the thread. Valid values are 0, 1, 2, 3, from most to least urgent. */
  priority: Scalars['Int']['output'];
  /** The human-readable identifier of the thread, ie T-1234. */
  ref: Scalars['String']['output'];
  /** If this thread has a linked SLA, this will inform on the status of its objectives. */
  serviceLevelAgreementStatusSummary: ServiceLevelAgreementStatusSummary;
  /** The status of this thread. */
  status: ThreadStatus;
  /** The datetime when the status of this thread was last changed. */
  statusChangedAt: DateTime;
  /** The actor who last changed the status of this thread. */
  statusChangedBy: Actor;
  /** Additional details about the current thread status. For instance, how long it will be snoozed for. */
  statusDetail?: Maybe<ThreadStatusDetail>;
  /**
   * The support email addresses involved in this thread.
   * A support email address is either the default support email address or an alternate support email address.
   * A support email address is considered to be involved in a thread when any participant in the thread uses it as their email recipient.
   */
  supportEmailAddresses: Array<Scalars['String']['output']>;
  /** The survey responses for this thread. */
  surveyResponse?: Maybe<SurveyResponse>;
  /** The tenant this thread is associated with. */
  tenant?: Maybe<Tenant>;
  /** The thread discussions attached to this thread. */
  threadDiscussions: Array<ThreadDiscussion>;
  /** The thread fields attached to this thread. */
  threadFields: Array<ThreadField>;
  /** The tier this thread is associated with. Tiers mandate the SLAs for this thread. */
  tier?: Maybe<Tier>;
  /** All of the timeline entries in this thread. */
  timelineEntries: TimelineEntryConnection;
  /** The title of this thread, which allows to quickly identify what it is about. */
  title: Scalars['String']['output'];
  /** The datetime when this thread was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this thread. */
  updatedBy: Actor;
};


/** A thread represents a conversation with a customer, around a specific topic. */
export type ThreadLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A thread represents a conversation with a customer, around a specific topic. */
export type ThreadParticipantsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** A thread represents a conversation with a customer, around a specific topic. */
export type ThreadTimelineEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filters?: InputMaybe<ThreadTimelineEntriesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ThreadAdditionalAssigneesTransitionedEntry = {
  __typename?: 'ThreadAdditionalAssigneesTransitionedEntry';
  nextAssignees: Array<ThreadAssignee>;
  previousAssignees: Array<ThreadAssignee>;
};

export type ThreadAssignee = MachineUser | System | User;

export type ThreadAssigneeInput = {
  machineUserId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ThreadAssignmentTransitionedEntry = {
  __typename?: 'ThreadAssignmentTransitionedEntry';
  nextAssignee?: Maybe<ThreadAssignee>;
  previousAssignee?: Maybe<ThreadAssignee>;
};

export type ThreadChange = {
  __typename?: 'ThreadChange';
  changeType: ChangeType;
  thread: Thread;
};

export enum ThreadChannel {
  Api = 'API',
  Chat = 'CHAT',
  Discord = 'DISCORD',
  Email = 'EMAIL',
  Import = 'IMPORT',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type ThreadChannelAssociation = {
  companyId?: Maybe<Scalars['ID']['output']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ThreadChannelDetails = ChatThreadChannelDetails | DiscordThreadChannelDetails | ImportThreadChannelDetails | MsTeamsThreadChannelDetails | SlackThreadChannelDetails;

export type ThreadChannelDetailsInput = {
  msTeams?: InputMaybe<MsTeamsThreadChannelDetailsInput>;
  slack?: InputMaybe<SlackThreadChannelDetailsInput>;
};

export type ThreadCluster = {
  __typename?: 'ThreadCluster';
  category: Scalars['String']['output'];
  confidence?: Maybe<Scalars['Float']['output']>;
  createdAt: DateTime;
  createdBy: Actor;
  description: Scalars['String']['output'];
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sentiment: Scalars['String']['output'];
  threads: Array<MinimalThreadWithDistance>;
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type ThreadClusterConnection = {
  __typename?: 'ThreadClusterConnection';
  edges: Array<ThreadClusterEdge>;
  pageInfo: PageInfo;
};

export type ThreadClusterEdge = {
  __typename?: 'ThreadClusterEdge';
  cursor: Scalars['String']['output'];
  node: ThreadCluster;
};

export type ThreadClustersFilter = {
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type ThreadConnection = {
  __typename?: 'ThreadConnection';
  edges: Array<ThreadEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ThreadDiscussion = {
  __typename?: 'ThreadDiscussion';
  createdAt: DateTime;
  createdBy: Actor;
  id: Scalars['ID']['output'];
  messages: ThreadDiscussionMessageConnection;
  resolvedAt?: Maybe<DateTime>;
  slackChannelId: Scalars['String']['output'];
  slackChannelName: Scalars['String']['output'];
  slackMessageLink: Scalars['String']['output'];
  slackTeamId: Scalars['String']['output'];
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: Actor;
};


export type ThreadDiscussionMessagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ThreadDiscussionEntry = {
  __typename?: 'ThreadDiscussionEntry';
  customerId: Scalars['ID']['output'];
  slackChannelName: Scalars['String']['output'];
  slackMessageLink: Scalars['String']['output'];
  threadDiscussionId: Scalars['ID']['output'];
};

export type ThreadDiscussionMessage = {
  __typename?: 'ThreadDiscussionMessage';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  deletedOnSlackAt?: Maybe<DateTime>;
  id: Scalars['ID']['output'];
  lastEditedOnSlackAt?: Maybe<DateTime>;
  reactions: Array<ThreadDiscussionMessageReaction>;
  slackMessageLink: Scalars['String']['output'];
  text: Scalars['String']['output'];
  threadDiscussionId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type ThreadDiscussionMessageConnection = {
  __typename?: 'ThreadDiscussionMessageConnection';
  edges: Array<ThreadDiscussionMessageEdge>;
  pageInfo: PageInfo;
};

export type ThreadDiscussionMessageEdge = {
  __typename?: 'ThreadDiscussionMessageEdge';
  cursor: Scalars['String']['output'];
  node: ThreadDiscussionMessage;
};

export type ThreadDiscussionMessageReaction = {
  __typename?: 'ThreadDiscussionMessageReaction';
  actors: Array<Actor>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type ThreadDiscussionResolvedEntry = {
  __typename?: 'ThreadDiscussionResolvedEntry';
  customerId: Scalars['ID']['output'];
  resolvedAt: DateTime;
  slackChannelName: Scalars['String']['output'];
  slackMessageLink: Scalars['String']['output'];
  threadDiscussionId: Scalars['ID']['output'];
};

export type ThreadEdge = {
  __typename?: 'ThreadEdge';
  cursor: Scalars['String']['output'];
  node: Thread;
};

export type ThreadEscalationDetails = {
  __typename?: 'ThreadEscalationDetails';
  /** The escalation path this thread is associated with. */
  escalationPath: EscalationPath;
  /** The step this thread will be escalated to. If it is null, the thread is at the end of the escalation path. */
  nextEscalationPathStep?: Maybe<EscalationPathStep>;
};

export type ThreadEvent = {
  __typename?: 'ThreadEvent';
  /** The list of components of the event. */
  components: Array<EventComponent>;
  /** The datetime when this event was created. */
  createdAt: DateTime;
  /** The actor who created this event. */
  createdBy: Actor;
  /** The customer that this event belongs to. */
  customerId: Scalars['ID']['output'];
  /** The ID of the event. */
  id: Scalars['ID']['output'];
  /** The thread that this event belongs to. */
  threadId: Scalars['ID']['output'];
  /** The title of the event. */
  title: Scalars['String']['output'];
  /** The datetime when this event was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this event. */
  updatedBy: Actor;
};

export type ThreadEventEntry = TimelineEventEntry & {
  __typename?: 'ThreadEventEntry';
  components: Array<EventComponent>;
  customerId: Scalars['ID']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  timelineEventId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ThreadField = {
  __typename?: 'ThreadField';
  booleanValue?: Maybe<Scalars['Boolean']['output']>;
  createdAt: DateTime;
  createdBy: Actor;
  id: Scalars['ID']['output'];
  isAiGenerated: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  stringValue?: Maybe<Scalars['String']['output']>;
  threadId: Scalars['ID']['output'];
  type: ThreadFieldSchemaType;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type ThreadFieldFilter = {
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
  stringValue?: InputMaybe<Scalars['String']['input']>;
};

export type ThreadFieldSchema = {
  __typename?: 'ThreadFieldSchema';
  createdAt: DateTime;
  createdBy: InternalActor;
  defaultBooleanValue?: Maybe<Scalars['Boolean']['output']>;
  defaultStringValue?: Maybe<Scalars['String']['output']>;
  dependsOnLabels: Array<DependsOnLabelType>;
  dependsOnThreadField?: Maybe<DependsOnThreadFieldType>;
  description: Scalars['String']['output'];
  enumValues: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAiAutoFillEnabled: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  type: ThreadFieldSchemaType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ThreadFieldSchemaChange = {
  __typename?: 'ThreadFieldSchemaChange';
  changeType: ChangeType;
  threadFieldSchema: ThreadFieldSchema;
};

export type ThreadFieldSchemaConnection = {
  __typename?: 'ThreadFieldSchemaConnection';
  edges: Array<ThreadFieldSchemaEdge>;
  pageInfo: PageInfo;
};

export type ThreadFieldSchemaEdge = {
  __typename?: 'ThreadFieldSchemaEdge';
  cursor: Scalars['String']['output'];
  node: ThreadFieldSchema;
};

export type ThreadFieldSchemaOrderInput = {
  order: Scalars['Int']['input'];
  threadFieldSchemaId: Scalars['ID']['input'];
};

export enum ThreadFieldSchemaType {
  Bool = 'BOOL',
  Enum = 'ENUM',
  String = 'STRING'
}

export type ThreadLabelsChangedEntry = {
  __typename?: 'ThreadLabelsChangedEntry';
  nextLabels: Array<Label>;
  previousLabels: Array<Label>;
};

export type ThreadLink = {
  createdAt: DateTime;
  createdBy: InternalActor;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  sourceId: Scalars['String']['output'];
  sourceType: Scalars['String']['output'];
  status: ThreadLinkStatus;
  threadId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
};

export type ThreadLinkCandidate = {
  __typename?: 'ThreadLinkCandidate';
  description?: Maybe<Scalars['String']['output']>;
  sourceId: Scalars['String']['output'];
  sourceStatus?: Maybe<ThreadLinkSourceStatus>;
  sourceType: Scalars['String']['output'];
  status: ThreadLinkStatus;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ThreadLinkCandidateConnection = {
  __typename?: 'ThreadLinkCandidateConnection';
  edges: Array<ThreadLinkCandidateEdge>;
  pageInfo: PageInfo;
};

export type ThreadLinkCandidateEdge = {
  __typename?: 'ThreadLinkCandidateEdge';
  cursor: Scalars['String']['output'];
  node: ThreadLinkCandidate;
};

export type ThreadLinkCandidateFilter = {
  sourceType: Scalars['String']['input'];
};

export type ThreadLinkConnection = {
  __typename?: 'ThreadLinkConnection';
  edges: Array<ThreadLinkEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ThreadLinkEdge = {
  __typename?: 'ThreadLinkEdge';
  cursor: Scalars['String']['output'];
  node: ThreadLink;
};

export type ThreadLinkGroup = {
  __typename?: 'ThreadLinkGroup';
  companyMetrics: ThreadLinkGroupCompanyMetrics;
  /**
   * The current rank of the thread link group considering groups
   * which match the non-ID input filters.
   */
  currentViewRank: Scalars['Int']['output'];
  /**
   * The default rank of the thread link group which takes into account
   * only active groups. This rank is not affected by input filters.
   */
  defaultViewRank?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  threadLinks: ThreadLinkConnection;
  threads: ThreadConnection;
  tierMetrics: ThreadLinkGroupTierMetrics;
};


export type ThreadLinkGroupThreadLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ThreadLinkGroupThreadsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ThreadLinkGroupAggregateMetrics = {
  __typename?: 'ThreadLinkGroupAggregateMetrics';
  totalCount: Scalars['Int']['output'];
};

export type ThreadLinkGroupCompanyMetrics = {
  __typename?: 'ThreadLinkGroupCompanyMetrics';
  byCompany: Array<ThreadLinkGroupSingleCompanyMetrics>;
  /** Metrics when the thread is not associated with any company. */
  noCompany: ThreadLinkGroupAggregateMetrics;
};

export type ThreadLinkGroupConnection = {
  __typename?: 'ThreadLinkGroupConnection';
  edges: Array<ThreadLinkGroupEdge>;
  pageInfo: PageInfo;
};

export type ThreadLinkGroupEdge = {
  __typename?: 'ThreadLinkGroupEdge';
  cursor: Scalars['String']['output'];
  node: ThreadLinkGroup;
};

export type ThreadLinkGroupFilter = {
  companyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Defaults to [TODO, IN_PROGRESS] */
  statuses?: InputMaybe<Array<ThreadLinkStatus>>;
  threadLinkGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tierIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type ThreadLinkGroupSingleCompanyMetrics = {
  __typename?: 'ThreadLinkGroupSingleCompanyMetrics';
  company: Company;
  metrics: ThreadLinkGroupAggregateMetrics;
};

export type ThreadLinkGroupSingleTierMetrics = {
  __typename?: 'ThreadLinkGroupSingleTierMetrics';
  metrics: ThreadLinkGroupAggregateMetrics;
  tier: Tier;
};

export type ThreadLinkGroupTierMetrics = {
  __typename?: 'ThreadLinkGroupTierMetrics';
  byTier: Array<ThreadLinkGroupSingleTierMetrics>;
  /** Metrics when the thread is not associated with any tier. */
  noTier: ThreadLinkGroupAggregateMetrics;
};

export type ThreadLinkSourceStatus = {
  __typename?: 'ThreadLinkSourceStatus';
  color?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

/**
 * Represents a simplified, high-level status of a thread link which can be used for filtering and sorting.
 * Statuses from different external providers (e.g. Linear, Jira, Incident.io, Notion... etc) are mapped to one of these values.
 */
export enum ThreadLinkStatus {
  /**
   * Indicates that the linked issue is in a state that is considered finished.
   * This includes granular statuses like "Completed", "Done", "Resolved", "Cancelled", ...etc.
   */
  Done = 'DONE',
  /**
   * Indicates that the linked entity is in a post-start state, but not yet finished.
   * This includes granular statuses like "Started", "In Progress", "In Review", "Blocked", ...etc
   */
  InProgress = 'IN_PROGRESS',
  /**
   * Indicates that the linked entity is in pre-start state.
   * This includes granular statuses like "Backlog", "Triage", "Unstarted", "Draft", "Planned", ...etc
   */
  Todo = 'TODO',
  /** Unknown or unsupported future statuses from external providers. */
  Unknown = 'UNKNOWN'
}

export type ThreadLinkUpdatedEntry = {
  __typename?: 'ThreadLinkUpdatedEntry';
  previousThreadLink: ThreadLink;
  threadLink: ThreadLink;
};

export type ThreadMessageInfo = {
  __typename?: 'ThreadMessageInfo';
  /** The source through which the message came through. */
  messageSource: MessageSource;
  /** The datetime when the last message was received. */
  timestamp: DateTime;
};

export type ThreadPriorityChangedEntry = {
  __typename?: 'ThreadPriorityChangedEntry';
  nextPriority: Scalars['Int']['output'];
  previousPriority: Scalars['Int']['output'];
};

export type ThreadSearchResult = {
  __typename?: 'ThreadSearchResult';
  thread: Thread;
};

export type ThreadSearchResultConnection = {
  __typename?: 'ThreadSearchResultConnection';
  edges: Array<ThreadSearchResultEdge>;
  pageInfo: PageInfo;
};

export type ThreadSearchResultEdge = {
  __typename?: 'ThreadSearchResultEdge';
  cursor: Scalars['String']['output'];
  node: ThreadSearchResult;
};

export enum ThreadStatus {
  Done = 'DONE',
  Snoozed = 'SNOOZED',
  Todo = 'TODO'
}

export type ThreadStatusDetail = ThreadStatusDetailCreated | ThreadStatusDetailDoneAutomaticallySet | ThreadStatusDetailDoneManuallySet | ThreadStatusDetailIgnored | ThreadStatusDetailInProgress | ThreadStatusDetailLinearUpdated | ThreadStatusDetailNewReply | ThreadStatusDetailReplied | ThreadStatusDetailSnoozed | ThreadStatusDetailThreadDiscussionResolved | ThreadStatusDetailThreadLinkUpdated | ThreadStatusDetailUnsnoozed | ThreadStatusDetailWaitingForCustomer | ThreadStatusDetailWaitingForDuration;

export type ThreadStatusDetailCreated = {
  __typename?: 'ThreadStatusDetailCreated';
  createdAt: DateTime;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailDoneAutomaticallySet = {
  __typename?: 'ThreadStatusDetailDoneAutomaticallySet';
  afterSeconds?: Maybe<Scalars['Int']['output']>;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailDoneManuallySet = {
  __typename?: 'ThreadStatusDetailDoneManuallySet';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailIgnored = {
  __typename?: 'ThreadStatusDetailIgnored';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailInProgress = {
  __typename?: 'ThreadStatusDetailInProgress';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailLinearUpdated = {
  __typename?: 'ThreadStatusDetailLinearUpdated';
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  linearIssueId: Scalars['ID']['output'];
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  statusChangedAt: DateTime;
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  updatedAt: DateTime;
};

export type ThreadStatusDetailNewReply = {
  __typename?: 'ThreadStatusDetailNewReply';
  /** @deprecated newReplyAt is no longer supported, query Thread.lastInboundMessageInfo.timestamp instead. */
  newReplyAt?: Maybe<DateTime>;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailReplied = {
  __typename?: 'ThreadStatusDetailReplied';
  /** @deprecated ThreadStatusDetailReplied is no longer supported. */
  repliedAt: DateTime;
  /** @deprecated ThreadStatusDetailReplied is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailSnoozed = {
  __typename?: 'ThreadStatusDetailSnoozed';
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  snoozedAt: DateTime;
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  snoozedUntil: DateTime;
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailThreadDiscussionResolved = {
  __typename?: 'ThreadStatusDetailThreadDiscussionResolved';
  statusChangedAt: DateTime;
  threadDiscussionId?: Maybe<Scalars['ID']['output']>;
};

export type ThreadStatusDetailThreadLinkUpdated = {
  __typename?: 'ThreadStatusDetailThreadLinkUpdated';
  linearIssueId?: Maybe<Scalars['ID']['output']>;
  statusChangedAt: DateTime;
  /** @deprecated Use statusChangedAt instead */
  updatedAt: DateTime;
};

export type ThreadStatusDetailUnsnoozed = {
  __typename?: 'ThreadStatusDetailUnsnoozed';
  /** @deprecated ThreadStatusDetailUnsnoozed is no longer supported. */
  snoozedAt: DateTime;
  /** @deprecated ThreadStatusDetailUnsnoozed is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailWaitingForCustomer = {
  __typename?: 'ThreadStatusDetailWaitingForCustomer';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailWaitingForDuration = {
  __typename?: 'ThreadStatusDetailWaitingForDuration';
  statusChangedAt: DateTime;
  waitingUntil: DateTime;
};

export type ThreadStatusTransitionedEntry = {
  __typename?: 'ThreadStatusTransitionedEntry';
  nextStatus: ThreadStatus;
  nextStatusDetail?: Maybe<ThreadStatusDetail>;
  previousStatus: ThreadStatus;
  previousStatusDetail?: Maybe<ThreadStatusDetail>;
};

export type ThreadTimelineEntriesFilter = {
  /** Only return message timeline entries. */
  isMessage?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ThreadWithDistance = {
  __typename?: 'ThreadWithDistance';
  distance: Scalars['Float']['output'];
  thread: Thread;
};

export type ThreadsDisplayOptions = {
  __typename?: 'ThreadsDisplayOptions';
  hasAssignees: Scalars['Boolean']['output'];
  hasChannels: Scalars['Boolean']['output'];
  hasCompany: Scalars['Boolean']['output'];
  hasCustomer: Scalars['Boolean']['output'];
  hasCustomerGroups: Scalars['Boolean']['output'];
  hasIssueTrackerIssues: Scalars['Boolean']['output'];
  /** @deprecated Use hasIssueTrackerIssues instead */
  hasJiraIssues: Scalars['Boolean']['output'];
  hasLabels: Scalars['Boolean']['output'];
  hasLastUpdated: Scalars['Boolean']['output'];
  /** @deprecated Use hasIssueTrackerIssues instead */
  hasLinearIssues: Scalars['Boolean']['output'];
  hasLinkedThreads: Scalars['Boolean']['output'];
  hasPreviewText: Scalars['Boolean']['output'];
  hasServiceLevelAgreements: Scalars['Boolean']['output'];
  hasStatus: Scalars['Boolean']['output'];
  hasTier: Scalars['Boolean']['output'];
};

export type ThreadsDisplayOptionsInput = {
  hasAssignees: Scalars['Boolean']['input'];
  hasChannels: Scalars['Boolean']['input'];
  hasCompany: Scalars['Boolean']['input'];
  hasCustomer: Scalars['Boolean']['input'];
  hasCustomerGroups: Scalars['Boolean']['input'];
  hasIssueTrackerIssues?: InputMaybe<Scalars['Boolean']['input']>;
  /** @deprecated Use hasIssueTrackerIssues instead */
  hasJiraIssues?: InputMaybe<Scalars['Boolean']['input']>;
  hasLabels: Scalars['Boolean']['input'];
  hasLastUpdated: Scalars['Boolean']['input'];
  /** @deprecated Use hasIssueTrackerIssues instead */
  hasLinearIssues?: InputMaybe<Scalars['Boolean']['input']>;
  hasLinkedThreads: Scalars['Boolean']['input'];
  hasPreviewText: Scalars['Boolean']['input'];
  hasServiceLevelAgreements: Scalars['Boolean']['input'];
  hasStatus: Scalars['Boolean']['input'];
  hasTier: Scalars['Boolean']['input'];
};

export type ThreadsFilter = {
  assignedToUser?: InputMaybe<Array<Scalars['ID']['input']>>;
  companyIdentifiers?: InputMaybe<Array<CompanyIdentifierInput>>;
  createdAt?: InputMaybe<DatetimeFilter>;
  customerGroupIdentifiers?: InputMaybe<Array<CustomerGroupIdentifier>>;
  customerIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  isAssigned?: InputMaybe<Scalars['Boolean']['input']>;
  isMarkedAsSpam?: InputMaybe<Scalars['Boolean']['input']>;
  labelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  messageSource?: InputMaybe<Array<MessageSource>>;
  participantIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  priorities?: InputMaybe<Array<Scalars['Int']['input']>>;
  refs?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceLevelAgreements?: InputMaybe<ServiceLevelAgreementFilter>;
  statusChangedAt?: InputMaybe<DatetimeFilter>;
  statusDetails?: InputMaybe<Array<StatusDetailType>>;
  statuses?: InputMaybe<Array<ThreadStatus>>;
  supportEmailAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  surveyResponse?: InputMaybe<SurveyResponseFilter>;
  tenantFields?: InputMaybe<Array<TenantFieldFilter>>;
  tenantIdentifiers?: InputMaybe<Array<TenantIdentifierInput>>;
  threadFields?: InputMaybe<Array<ThreadFieldFilter>>;
  threadIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  threadLinkGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tierIdentifiers?: InputMaybe<Array<TierIdentifierInput>>;
  updatedAt?: InputMaybe<DatetimeFilter>;
};

export enum ThreadsGroupBy {
  Assignee = 'ASSIGNEE',
  Channel = 'CHANNEL',
  Company = 'COMPANY',
  CustomerGroup = 'CUSTOMER_GROUP',
  Label = 'LABEL',
  None = 'NONE',
  Priority = 'PRIORITY',
  Status = 'STATUS',
  Tenant = 'TENANT',
  Tier = 'TIER'
}

export enum ThreadsLayout {
  Board = 'BOARD',
  Table = 'TABLE'
}

/**
 * Query to search for threads. The search term provided is used to match against different parts of the thread:
 * - its title
 * - its messages
 * - the customer's name
 * - the customer's email
 */
export type ThreadsSearchQuery = {
  /** The term to search for. It must be at least 2 characters long. The search is case-insensitive. */
  term: Scalars['String']['input'];
};

export type ThreadsSort = {
  direction: SortDirection;
  field: ThreadsSortField;
};

export enum ThreadsSortField {
  ClosestToBreachSla = 'CLOSEST_TO_BREACH_SLA',
  CreatedAt = 'CREATED_AT',
  LastInboundMessageAt = 'LAST_INBOUND_MESSAGE_AT',
  Priority = 'PRIORITY',
  StatusChangedAt = 'STATUS_CHANGED_AT'
}

export type Tier = {
  __typename?: 'Tier';
  /** The color to assign to this tier, given by its hex code (e.g. #FABADA). This color is used in Plain's UI to represent this tier. */
  color: Scalars['String']['output'];
  createdAt: DateTime;
  createdBy: InternalActor;
  /**
   * Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it.
   * @deprecated Use defaultThreadPriority instead.
   */
  defaultPriority: Scalars['Int']['output'];
  /** Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it. */
  defaultThreadPriority: Scalars['Int']['output'];
  /** The external ID of this tier. You can use this field to store your own unique identifier for this tier. This must be unique in your workspace. */
  externalId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** If true, this tier will be applied to all threads that do not match any other tier. Only one tier can be the default tier. */
  isDefault: Scalars['Boolean']['output'];
  memberships: TierMembershipConnection;
  /** The name of this tier. */
  name: Scalars['String']['output'];
  serviceLevelAgreements: Array<ServiceLevelAgreement>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type TierMembershipsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TierConnection = {
  __typename?: 'TierConnection';
  edges: Array<TierEdge>;
  pageInfo: PageInfo;
};

export type TierEdge = {
  __typename?: 'TierEdge';
  cursor: Scalars['String']['output'];
  node: Tier;
};

export type TierIdentifierInput = {
  externalId?: InputMaybe<Scalars['String']['input']>;
  tierId?: InputMaybe<Scalars['ID']['input']>;
};

export type TierMemberIdentifierInput = {
  companyId?: InputMaybe<Scalars['ID']['input']>;
  tenantId?: InputMaybe<Scalars['ID']['input']>;
};

export type TierMembership = CompanyTierMembership | TenantTierMembership;

export type TierMembershipConnection = {
  __typename?: 'TierMembershipConnection';
  edges: Array<TierMembershipEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TierMembershipEdge = {
  __typename?: 'TierMembershipEdge';
  cursor: Scalars['String']['output'];
  node: TierMembership;
};

export type TieredRecurringPrice = RecurringPrice & {
  __typename?: 'TieredRecurringPrice';
  billingIntervalCount: Scalars['Int']['output'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
  tiers: Array<PriceTier>;
};

export type Time = {
  __typename?: 'Time';
  iso8601: Scalars['String']['output'];
};

export type TimeSeriesMetric = {
  __typename?: 'TimeSeriesMetric';
  series: Array<TimeSeriesSeries>;
  timestamps: Array<DateTime>;
};

export type TimeSeriesMetricDimension = {
  __typename?: 'TimeSeriesMetricDimension';
  type: TimeSeriesMetricDimensionType;
  value: Scalars['String']['output'];
};

export enum TimeSeriesMetricDimensionType {
  Company = 'COMPANY',
  CustomerGroup = 'CUSTOMER_GROUP',
  LabelType = 'LABEL_TYPE',
  MessageSource = 'MESSAGE_SOURCE',
  Priority = 'PRIORITY',
  TenantField = 'TENANT_FIELD',
  ThreadField = 'THREAD_FIELD',
  Tier = 'TIER'
}

export type TimeSeriesMetricFilters = {
  csatRating?: InputMaybe<Scalars['Int']['input']>;
  csatSurveyId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type TimeSeriesMetricInterval = {
  unit?: InputMaybe<TimeSeriesMetricIntervalUnit>;
};

export enum TimeSeriesMetricIntervalUnit {
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Week = 'WEEK'
}

export type TimeSeriesMetricOptions = {
  dimension?: InputMaybe<TimeSeriesMetricDimensionType>;
  fetchThreadIds?: InputMaybe<Scalars['Boolean']['input']>;
  filters?: InputMaybe<TimeSeriesMetricFilters>;
  /** Defaults to 24 hours ago. */
  from?: InputMaybe<Scalars['String']['input']>;
  interval?: InputMaybe<TimeSeriesMetricInterval>;
  subDimension?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type TimeSeriesSeries = {
  __typename?: 'TimeSeriesSeries';
  dimension?: Maybe<TimeSeriesMetricDimension>;
  threadIds?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
  userId?: Maybe<Scalars['ID']['output']>;
  values: Array<Maybe<Scalars['Float']['output']>>;
};

export type TimelineEntry = {
  __typename?: 'TimelineEntry';
  actor: Actor;
  customerId: Scalars['ID']['output'];
  entry: Entry;
  id: Scalars['ID']['output'];
  llmText?: Maybe<Scalars['String']['output']>;
  threadId: Scalars['ID']['output'];
  timestamp: DateTime;
};

export type TimelineEntryChange = {
  __typename?: 'TimelineEntryChange';
  changeType: ChangeType;
  timelineEntry: TimelineEntry;
};

export type TimelineEntryConnection = {
  __typename?: 'TimelineEntryConnection';
  edges: Array<TimelineEntryEdge>;
  pageInfo: PageInfo;
};

export type TimelineEntryEdge = {
  __typename?: 'TimelineEntryEdge';
  cursor: Scalars['String']['output'];
  node: TimelineEntry;
};

export type TimelineEventEntry = {
  components: Array<EventComponent>;
  customerId: Scalars['ID']['output'];
  externalId?: Maybe<Scalars['ID']['output']>;
  timelineEventId: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Timezone = {
  __typename?: 'Timezone';
  name: Scalars['String']['output'];
};

export enum TodoStatusDetail {
  Created = 'CREATED',
  InProgress = 'IN_PROGRESS',
  NewReply = 'NEW_REPLY',
  ThreadDiscussionResolved = 'THREAD_DISCUSSION_RESOLVED',
  ThreadLinkUpdated = 'THREAD_LINK_UPDATED'
}

export type ToggleFeatureEntitlement = BillingFeatureEntitlement & {
  __typename?: 'ToggleFeatureEntitlement';
  feature: FeatureKey;
  isEntitled: Scalars['Boolean']['output'];
};

export type ToggleSlackMessageReactionInput = {
  reactionName: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
  timelineEntryId: Scalars['ID']['input'];
};

export type ToggleSlackMessageReactionOutput = {
  __typename?: 'ToggleSlackMessageReactionOutput';
  error?: Maybe<MutationError>;
};

export type ToggleWorkflowRulePublishedInput = {
  workflowRuleId: Scalars['ID']['input'];
};

export type ToggleWorkflowRulePublishedOutput = {
  __typename?: 'ToggleWorkflowRulePublishedOutput';
  error?: Maybe<MutationError>;
  workflowRule?: Maybe<WorkflowRule>;
};

export type UnarchiveLabelTypeInput = {
  labelTypeId: Scalars['ID']['input'];
};

export type UnarchiveLabelTypeOutput = {
  __typename?: 'UnarchiveLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type UnassignThreadInput = {
  threadId: Scalars['ID']['input'];
};

export type UnassignThreadOutput = {
  __typename?: 'UnassignThreadOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UnmarkCustomerAsSpamInput = {
  customerId: Scalars['ID']['input'];
};

export type UnmarkCustomerAsSpamOutput = {
  __typename?: 'UnmarkCustomerAsSpamOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type UpdateActiveBillingRotaInput = {
  userIdsToAdd?: InputMaybe<Array<Scalars['ID']['input']>>;
  userIdsToRemove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateActiveBillingRotaOutput = {
  __typename?: 'UpdateActiveBillingRotaOutput';
  billingRota?: Maybe<BillingRota>;
  error?: Maybe<MutationError>;
};

export type UpdateApiKeyInput = {
  apiKeyId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  permissions: Array<Scalars['String']['input']>;
};

export type UpdateApiKeyOutput = {
  __typename?: 'UpdateApiKeyOutput';
  apiKey?: Maybe<ApiKey>;
  error?: Maybe<MutationError>;
};

export type UpdateAutoresponderInput = {
  autoresponderId: Scalars['ID']['input'];
  conditions?: InputMaybe<Array<AutoresponderConditionInput>>;
  isEnabled?: InputMaybe<BooleanInput>;
  markdownContent?: InputMaybe<OptionalStringInput>;
  messageSources?: InputMaybe<Array<AutoresponderMessageSource>>;
  name?: InputMaybe<StringInput>;
  order?: InputMaybe<IntInput>;
  responseDelaySeconds?: InputMaybe<IntInput>;
  textContent?: InputMaybe<StringInput>;
};

export type UpdateAutoresponderOutput = {
  __typename?: 'UpdateAutoresponderOutput';
  autoresponder?: Maybe<Autoresponder>;
  error?: Maybe<MutationError>;
};

export type UpdateChatAppInput = {
  chatAppId: Scalars['ID']['input'];
  logo?: InputMaybe<WorkspaceFileInput>;
  name?: InputMaybe<StringInput>;
};

export type UpdateChatAppOutput = {
  __typename?: 'UpdateChatAppOutput';
  chatApp?: Maybe<ChatApp>;
  error?: Maybe<MutationError>;
};

export type UpdateCompanyTierInput = {
  companyIdentifier: CompanyIdentifierInput;
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateCompanyTierOutput = {
  __typename?: 'UpdateCompanyTierOutput';
  companyTierMembership?: Maybe<CompanyTierMembership>;
  error?: Maybe<MutationError>;
};

export type UpdateConnectedDiscordChannelInput = {
  connectedDiscordChannelId: Scalars['ID']['input'];
  isEnabled?: InputMaybe<BooleanInput>;
};

export type UpdateConnectedDiscordChannelOutput = {
  __typename?: 'UpdateConnectedDiscordChannelOutput';
  connectedDiscordChannel?: Maybe<ConnectedDiscordChannel>;
  error?: Maybe<MutationError>;
};

export type UpdateConnectedSlackChannelInput = {
  channelType?: InputMaybe<ConnectedSlackChannelType>;
  connectedSlackChannelId: Scalars['ID']['input'];
  isEnabled?: InputMaybe<BooleanInput>;
};

export type UpdateConnectedSlackChannelOutput = {
  __typename?: 'UpdateConnectedSlackChannelOutput';
  connectedSlackChannel?: Maybe<ConnectedSlackChannel>;
  error?: Maybe<MutationError>;
};

/** For constraints and details on the fields see the `CustomerCardConfig` type. */
export type UpdateCustomerCardConfigInput = {
  /** If provided, will replace the existing API headers. Requires the `customerCardConfigApiDetails:edit` permission. */
  apiHeaders?: InputMaybe<Array<CustomerCardConfigApiHeaderInput>>;
  /** If provided, will update the API URL. Requires the `customerCardConfigApiDetails:edit` permission. */
  apiUrl?: InputMaybe<StringInput>;
  /** The customer card config to update. */
  customerCardConfigId: Scalars['ID']['input'];
  /** If provided, will update the default time to live seconds. */
  defaultTimeToLiveSeconds?: InputMaybe<IntInput>;
  /** If provided, will update the enabled flag. */
  isEnabled?: InputMaybe<BooleanInput>;
  /** If provided, will update the key. Keys must be unique in a workspace. */
  key?: InputMaybe<StringInput>;
  /** If provided, will update the order. */
  order?: InputMaybe<IntInput>;
  /** If provided, will update the title. */
  title?: InputMaybe<StringInput>;
};

export type UpdateCustomerCardConfigOutput = {
  __typename?: 'UpdateCustomerCardConfigOutput';
  /** The updated customer card config. */
  customerCardConfig?: Maybe<CustomerCardConfig>;
  error?: Maybe<MutationError>;
};

export type UpdateCustomerCompanyInput = {
  /** The identifier of the company we want to update the customer with. Pass null if you want to remove the company from the customer. */
  companyIdentifier?: InputMaybe<CompanyIdentifierInput>;
  /** The identifier of the customer we want to update the company for. */
  customerId: Scalars['ID']['input'];
};

export type UpdateCustomerCompanyOutput = {
  __typename?: 'UpdateCustomerCompanyOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
};

export type UpdateCustomerGroupInput = {
  color?: InputMaybe<StringInput>;
  customerGroupId: Scalars['ID']['input'];
  externalId?: InputMaybe<OptionalStringInput>;
  key?: InputMaybe<StringInput>;
  name?: InputMaybe<StringInput>;
};

export type UpdateCustomerGroupOutput = {
  __typename?: 'UpdateCustomerGroupOutput';
  customerGroup?: Maybe<CustomerGroup>;
  error?: Maybe<MutationError>;
};

export type UpdateCustomerSurveyInput = {
  conditions?: InputMaybe<Array<CustomerSurveyConditionInput>>;
  customerIntervalDays?: InputMaybe<IntInput>;
  customerSurveyId: Scalars['ID']['input'];
  isEnabled?: InputMaybe<BooleanInput>;
  name?: InputMaybe<StringInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  responseDelayMinutes?: InputMaybe<IntInput>;
  template?: InputMaybe<CustomerSurveyTemplateInput>;
};

export type UpdateCustomerSurveyOutput = {
  __typename?: 'UpdateCustomerSurveyOutput';
  customerSurvey?: Maybe<CustomerSurvey>;
  error?: Maybe<MutationError>;
};

export type UpdateEscalationPathInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  escalationPathId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  steps?: InputMaybe<Array<EscalationPathStepInput>>;
};

export type UpdateEscalationPathOutput = {
  __typename?: 'UpdateEscalationPathOutput';
  error?: Maybe<MutationError>;
  escalationPath?: Maybe<EscalationPath>;
};

export type UpdateGeneratedReplyInput = {
  feedback?: InputMaybe<GeneratedReplyFeedbackInput>;
  generatedReplyId: Scalars['ID']['input'];
};

export type UpdateGeneratedReplyOutput = {
  __typename?: 'UpdateGeneratedReplyOutput';
  error?: Maybe<MutationError>;
  generatedReply?: Maybe<GeneratedReply>;
};

export type UpdateHelpCenterArticleGroupInput = {
  helpCenterArticleGroupId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHelpCenterArticleGroupOutput = {
  __typename?: 'UpdateHelpCenterArticleGroupOutput';
  error?: Maybe<MutationError>;
  helpCenterArticleGroup?: Maybe<HelpCenterArticleGroup>;
};

export type UpdateHelpCenterCustomDomainNameInput = {
  customDomainName: OptionalStringInput;
  helpCenterId: Scalars['ID']['input'];
};

export type UpdateHelpCenterCustomDomainNameOutput = {
  __typename?: 'UpdateHelpCenterCustomDomainNameOutput';
  error?: Maybe<MutationError>;
  helpCenter?: Maybe<HelpCenter>;
};

export type UpdateHelpCenterIndexInput = {
  hash: Scalars['String']['input'];
  helpCenterId: Scalars['ID']['input'];
  helpCenterIndex: Array<HelpCenterIndexItemInput>;
};

export type UpdateHelpCenterIndexOutput = {
  __typename?: 'UpdateHelpCenterIndexOutput';
  error?: Maybe<MutationError>;
  helpCenterIndex?: Maybe<HelpCenterIndex>;
};

export type UpdateHelpCenterInput = {
  access?: InputMaybe<HelpCenterAccessSettingsInput>;
  agentAvatarImage?: InputMaybe<HelpCenterThemedImageInput>;
  authMechanism?: InputMaybe<HelpCenterAuthMechanismInput>;
  bodyCustomJs?: InputMaybe<StringInput>;
  color?: InputMaybe<StringInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  favicon?: InputMaybe<HelpCenterThemedImageInput>;
  headCustomJs?: InputMaybe<StringInput>;
  helpCenterId: Scalars['ID']['input'];
  internalName?: InputMaybe<Scalars['String']['input']>;
  isChatEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  logo?: InputMaybe<HelpCenterThemedImageInput>;
  portalSettings?: InputMaybe<HelpCenterPortalSettingsInput>;
  publicName?: InputMaybe<Scalars['String']['input']>;
  socialPreviewImage?: InputMaybe<WorkspaceFileInput>;
  subdomain?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<HelpCenterType>;
};

export type UpdateHelpCenterOutput = {
  __typename?: 'UpdateHelpCenterOutput';
  error?: Maybe<MutationError>;
  helpCenter?: Maybe<HelpCenter>;
};

export type UpdateLabelTypeInput = {
  color?: InputMaybe<OptionalStringInput>;
  description?: InputMaybe<OptionalStringInput>;
  icon?: InputMaybe<OptionalStringInput>;
  labelTypeId: Scalars['ID']['input'];
  name?: InputMaybe<StringInput>;
};

export type UpdateLabelTypeOutput = {
  __typename?: 'UpdateLabelTypeOutput';
  error?: Maybe<MutationError>;
  labelType?: Maybe<LabelType>;
};

export type UpdateMachineUserInput = {
  avatar?: InputMaybe<WorkspaceFileInput>;
  description?: InputMaybe<StringInput>;
  fullName?: InputMaybe<StringInput>;
  machineUserId: Scalars['ID']['input'];
  publicName?: InputMaybe<StringInput>;
  /** The type of machine user. Defaults to API_USER if not specified. */
  type?: InputMaybe<MachineUserType>;
};

export type UpdateMachineUserOutput = {
  __typename?: 'UpdateMachineUserOutput';
  error?: Maybe<MutationError>;
  machineUser?: Maybe<MachineUser>;
};

export type UpdateMyUserInput = {
  fullName?: InputMaybe<OptionalStringInput>;
  publicName?: InputMaybe<OptionalStringInput>;
};

export type UpdateMyUserOutput = {
  __typename?: 'UpdateMyUserOutput';
  error?: Maybe<MutationError>;
  user?: Maybe<User>;
};

export type UpdateSavedThreadsViewInput = {
  color?: InputMaybe<StringInput>;
  icon?: InputMaybe<StringInput>;
  name?: InputMaybe<StringInput>;
  savedThreadsViewId: Scalars['ID']['input'];
  threadsFilter?: InputMaybe<SavedThreadsViewFilterInput>;
};

export type UpdateSavedThreadsViewOutput = {
  __typename?: 'UpdateSavedThreadsViewOutput';
  error?: Maybe<MutationError>;
  savedThreadsView?: Maybe<SavedThreadsView>;
};

export type UpdateServiceLevelAgreementInput = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions?: InputMaybe<Array<BreachActionInput>>;
  /** This SLA will breach if it does not receive a first response within this many minutes. May only be provided if the service level agreement is a first response time SLA. */
  firstResponseTimeMinutes?: InputMaybe<IntInput>;
  /** This SLA will breach if it does not receive a next response within this many minutes. May only be provided if the service level agreement is a next response time SLA. */
  nextResponseTimeMinutes?: InputMaybe<IntInput>;
  /** The ID of the SLA to update. */
  serviceLevelAgreementId: Scalars['ID']['input'];
  /** This SLA can only be applied to a thread if it has one or all of these label types. If not provided, the filter is not applied. */
  threadLabelTypeIdFilter?: InputMaybe<ServiceLevelAgreementThreadLabelTypeIdFilterInput>;
  /** This SLA can only be applied to a thread if it has one of these priority values. If not provided, it defaults to all priorities (0, 1, 2 and 3). */
  threadPriorityFilter?: InputMaybe<IntArrayInput>;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly?: InputMaybe<BooleanInput>;
};

export type UpdateServiceLevelAgreementOutput = {
  __typename?: 'UpdateServiceLevelAgreementOutput';
  error?: Maybe<MutationError>;
  serviceLevelAgreement?: Maybe<ServiceLevelAgreement>;
};

/** An input provided to the `updateSetting` mutation. */
export type UpdateSettingInput = {
  /** A code for the setting. */
  code: Scalars['String']['input'];
  /** A valid scope for the setting code. */
  scope: SettingScopeInput;
  /** The setting value. */
  value: SettingValueInput;
};

/**
 * An output type provided by the `updateSetting` mutation.
 * Returns the updated setting or an error.
 */
export type UpdateSettingOutput = {
  __typename?: 'UpdateSettingOutput';
  error?: Maybe<MutationError>;
  /** The updated setting. */
  setting?: Maybe<Setting>;
};

export type UpdateSnippetInput = {
  markdown?: InputMaybe<StringInput>;
  name?: InputMaybe<StringInput>;
  /** Used to group snippets, only accepts alphanumeric characters */
  path?: InputMaybe<OptionalStringInput>;
  snippetId: Scalars['ID']['input'];
  text?: InputMaybe<StringInput>;
};

export type UpdateSnippetOutput = {
  __typename?: 'UpdateSnippetOutput';
  error?: Maybe<MutationError>;
  snippet?: Maybe<Snippet>;
};

export type UpdateTenantTierInput = {
  tenantIdentifier: TenantIdentifierInput;
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateTenantTierOutput = {
  __typename?: 'UpdateTenantTierOutput';
  error?: Maybe<MutationError>;
  tenantTierMembership?: Maybe<TenantTierMembership>;
};

export type UpdateThreadEscalationPathInput = {
  escalationPathId?: InputMaybe<Scalars['ID']['input']>;
  threadId: Scalars['ID']['input'];
};

export type UpdateThreadEscalationPathOutput = {
  __typename?: 'UpdateThreadEscalationPathOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UpdateThreadFieldSchemaInput = {
  defaultBooleanValue?: InputMaybe<OptionalBooleanInput>;
  defaultStringValue?: InputMaybe<OptionalStringInput>;
  dependsOnLabelTypeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  dependsOnThreadField?: InputMaybe<OptionalDependsOnThreadFieldInput>;
  description?: InputMaybe<StringInput>;
  enumValues?: InputMaybe<Array<Scalars['String']['input']>>;
  isAiAutoFillEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<StringInput>;
  order?: InputMaybe<Scalars['Int']['input']>;
  threadFieldSchemaId: Scalars['ID']['input'];
};

export type UpdateThreadFieldSchemaOutput = {
  __typename?: 'UpdateThreadFieldSchemaOutput';
  error?: Maybe<MutationError>;
  threadFieldSchema?: Maybe<ThreadFieldSchema>;
};

export type UpdateThreadTenantInput = {
  tenantIdentifier?: InputMaybe<TenantIdentifierInput>;
  threadId: Scalars['ID']['input'];
};

export type UpdateThreadTenantOutput = {
  __typename?: 'UpdateThreadTenantOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UpdateThreadTierInput = {
  threadId: Scalars['ID']['input'];
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateThreadTierOutput = {
  __typename?: 'UpdateThreadTierOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UpdateThreadTitleInput = {
  threadId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};

export type UpdateThreadTitleOutput = {
  __typename?: 'UpdateThreadTitleOutput';
  error?: Maybe<MutationError>;
  thread?: Maybe<Thread>;
};

export type UpdateTierInput = {
  color?: InputMaybe<StringInput>;
  defaultThreadPriority?: InputMaybe<IntInput>;
  externalId?: InputMaybe<OptionalStringInput>;
  isDefault?: InputMaybe<BooleanInput>;
  name?: InputMaybe<StringInput>;
  tierId: Scalars['ID']['input'];
};

export type UpdateTierOutput = {
  __typename?: 'UpdateTierOutput';
  error?: Maybe<MutationError>;
  tier?: Maybe<Tier>;
};

export type UpdateWebhookTargetInput = {
  description?: InputMaybe<StringInput>;
  eventSubscriptions?: InputMaybe<Array<WebhookTargetEventSubscriptionInput>>;
  isEnabled?: InputMaybe<BooleanInput>;
  url?: InputMaybe<StringInput>;
  version?: InputMaybe<StringInput>;
  webhookTargetId: Scalars['ID']['input'];
};

export type UpdateWebhookTargetOutput = {
  __typename?: 'UpdateWebhookTargetOutput';
  error?: Maybe<MutationError>;
  webhookTarget?: Maybe<WebhookTarget>;
};

export type UpdateWorkflowRuleInput = {
  name?: InputMaybe<StringInput>;
  /** JSON-encoded payload of the rule definition. */
  payload?: InputMaybe<StringInput>;
  workflowRuleId: Scalars['ID']['input'];
};

export type UpdateWorkflowRuleOutput = {
  __typename?: 'UpdateWorkflowRuleOutput';
  error?: Maybe<MutationError>;
  workflowRule?: Maybe<WorkflowRule>;
};

export type UpdateWorkspaceEmailSettingsInput = {
  isEnabled: Scalars['Boolean']['input'];
};

export type UpdateWorkspaceEmailSettingsOutput = {
  __typename?: 'UpdateWorkspaceEmailSettingsOutput';
  error?: Maybe<MutationError>;
  workspaceEmailSettings?: Maybe<WorkspaceEmailSettings>;
};

export type UpdateWorkspaceInput = {
  domainNames?: InputMaybe<Array<Scalars['String']['input']>>;
  logo?: InputMaybe<WorkspaceFileInput>;
  name?: InputMaybe<StringInput>;
  publicName?: InputMaybe<StringInput>;
};

export type UpdateWorkspaceOutput = {
  __typename?: 'UpdateWorkspaceOutput';
  error?: Maybe<MutationError>;
  workspace?: Maybe<Workspace>;
};

export type UploadFormData = {
  __typename?: 'UploadFormData';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type UpsertBusinessHoursInput = {
  weekDays?: InputMaybe<BusinessHoursWeekDaysInput>;
};

export type UpsertBusinessHoursOutput = {
  __typename?: 'UpsertBusinessHoursOutput';
  businessHours?: Maybe<BusinessHours>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export type UpsertCompanyInput = {
  accountOwnerUserId?: InputMaybe<Scalars['ID']['input']>;
  contractValue?: InputMaybe<Scalars['Int']['input']>;
  domainName: Scalars['String']['input'];
  identifier: CompanyIdentifierInput;
  name: Scalars['String']['input'];
};

export type UpsertCompanyOutput = {
  __typename?: 'UpsertCompanyOutput';
  company?: Maybe<Company>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export type UpsertCustomerGroupInput = {
  color: Scalars['String']['input'];
  externalId?: InputMaybe<Scalars['String']['input']>;
  identifier: CustomerGroupIdentifier;
  key: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpsertCustomerGroupOutput = {
  __typename?: 'UpsertCustomerGroupOutput';
  customerGroup?: Maybe<CustomerGroup>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export type UpsertCustomerIdentifierInput = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  emailAddress?: InputMaybe<Scalars['String']['input']>;
  externalId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpsertCustomerInput = {
  identifier: UpsertCustomerIdentifierInput;
  onCreate: UpsertCustomerOnCreateInput;
  onUpdate: UpsertCustomerOnUpdateInput;
};

export type UpsertCustomerOnCreateInput = {
  customerGroupIdentifiers?: InputMaybe<Array<CustomerGroupIdentifier>>;
  email: EmailAddressInput;
  externalId?: InputMaybe<Scalars['ID']['input']>;
  fullName: Scalars['String']['input'];
  shortName?: InputMaybe<Scalars['String']['input']>;
  tenantIdentifiers?: InputMaybe<Array<TenantIdentifierInput>>;
};

export type UpsertCustomerOnUpdateInput = {
  email?: InputMaybe<EmailAddressInput>;
  externalId?: InputMaybe<OptionalStringInput>;
  fullName?: InputMaybe<StringInput>;
  shortName?: InputMaybe<OptionalStringInput>;
};

export type UpsertCustomerOutput = {
  __typename?: 'UpsertCustomerOutput';
  customer?: Maybe<Customer>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export type UpsertHelpCenterArticleInput = {
  contentHtml: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  helpCenterArticleGroupId?: InputMaybe<Scalars['ID']['input']>;
  helpCenterArticleId?: InputMaybe<Scalars['ID']['input']>;
  helpCenterId: Scalars['ID']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<HelpCenterArticleStatus>;
  title: Scalars['String']['input'];
};

export type UpsertHelpCenterArticleOutput = {
  __typename?: 'UpsertHelpCenterArticleOutput';
  error?: Maybe<MutationError>;
  helpCenterArticle?: Maybe<HelpCenterArticle>;
};

export type UpsertMyEmailSignatureInput = {
  markdown?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type UpsertMyEmailSignatureOutput = {
  __typename?: 'UpsertMyEmailSignatureOutput';
  emailSignature?: Maybe<EmailSignature>;
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
};

export enum UpsertResult {
  Created = 'CREATED',
  Noop = 'NOOP',
  Updated = 'UPDATED'
}

export type UpsertTenantFieldInput = {
  arrayValue?: InputMaybe<Array<Scalars['String']['input']>>;
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  dateValue?: InputMaybe<Scalars['String']['input']>;
  numberValue?: InputMaybe<Scalars['Float']['input']>;
  stringValue?: InputMaybe<Scalars['String']['input']>;
  tenantFieldIdentifier: TenantFieldIdentifier;
  type: TenantFieldType;
};

export type UpsertTenantFieldOutput = {
  __typename?: 'UpsertTenantFieldOutput';
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
  tenantField?: Maybe<TenantField>;
};

export type UpsertTenantFieldSchemaInput = {
  tenantFieldSchemas: Array<TenantFieldSchemaInput>;
};

export type UpsertTenantFieldSchemaOutput = {
  __typename?: 'UpsertTenantFieldSchemaOutput';
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
  tenantFieldSchemas: Array<TenantFieldSchema>;
};

export type UpsertTenantInput = {
  externalId: Scalars['String']['input'];
  identifier: TenantIdentifierInput;
  name: Scalars['String']['input'];
  url?: InputMaybe<OptionalStringInput>;
};

export type UpsertTenantOutput = {
  __typename?: 'UpsertTenantOutput';
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
  tenant?: Maybe<Tenant>;
};

export type UpsertThreadFieldIdentifier = {
  key: Scalars['String']['input'];
  threadId: Scalars['ID']['input'];
};

export type UpsertThreadFieldInput = {
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  identifier: UpsertThreadFieldIdentifier;
  stringValue?: InputMaybe<Scalars['String']['input']>;
  type: ThreadFieldSchemaType;
};

export type UpsertThreadFieldOutput = {
  __typename?: 'UpsertThreadFieldOutput';
  error?: Maybe<MutationError>;
  result?: Maybe<UpsertResult>;
  threadField?: Maybe<ThreadField>;
};

export type User = {
  __typename?: 'User';
  /** Additional legacy roles that the user has in the workspace. */
  additionalLegacyRoles: Array<Role>;
  /** The avatar URL of the user. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt?: Maybe<DateTime>;
  deletedBy?: Maybe<Actor>;
  /** The email associated with this user. Email is unique per user. */
  email: Scalars['String']['output'];
  /** The full name e.g. Grace Hopper. */
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  /** The labels associated with this user. */
  labels: Array<Label>;
  /** A short name for use in UI e.g. Grace. */
  publicName: Scalars['String']['output'];
  /** The role of the user in the workspace. */
  role?: Maybe<Role>;
  /** (Legacy) Retrieve roles for a specific workspace + user. */
  roles: Array<Role>;
  /** Connected slack users to this Plain account. */
  slackIdentities: Array<SlackUserIdentity>;
  status: UserStatus;
  statusChangedAt: DateTime;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserAccount = {
  __typename?: 'UserAccount';
  /** The email associated with this user. Email is unique per user. */
  email: Scalars['String']['output'];
  /** The full name e.g. Grace Hopper. */
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** A short name for use in UI e.g. Grace. */
  publicName: Scalars['String']['output'];
};

export type UserActor = {
  __typename?: 'UserActor';
  user: User;
  userId: Scalars['ID']['output'];
};

export type UserAuthDiscordChannelInstallationInfo = {
  __typename?: 'UserAuthDiscordChannelInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type UserAuthDiscordChannelIntegration = {
  __typename?: 'UserAuthDiscordChannelIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  discordGlobalName?: Maybe<Scalars['String']['output']>;
  discordGuildId: Scalars['String']['output'];
  discordUserEmail: Scalars['String']['output'];
  discordUserId: Scalars['String']['output'];
  discordUsername: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserAuthDiscordChannelIntegrationConnection = {
  __typename?: 'UserAuthDiscordChannelIntegrationConnection';
  edges: Array<UserAuthDiscordChannelIntegrationEdge>;
  pageInfo: PageInfo;
};

export type UserAuthDiscordChannelIntegrationEdge = {
  __typename?: 'UserAuthDiscordChannelIntegrationEdge';
  cursor: Scalars['String']['output'];
  node: UserAuthDiscordChannelIntegration;
};

export type UserAuthSlackInstallationInfo = {
  __typename?: 'UserAuthSlackInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type UserAuthSlackIntegration = {
  __typename?: 'UserAuthSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  slackTeamId: Scalars['String']['output'];
  slackTeamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserChange = {
  __typename?: 'UserChange';
  changeType: ChangeType;
  user: User;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserEmailActor = {
  __typename?: 'UserEmailActor';
  user: User;
  userId: Scalars['ID']['output'];
};

export type UserLinearInstallationInfo = {
  __typename?: 'UserLinearInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type UserLinearIntegration = {
  __typename?: 'UserLinearIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  linearOrganisationId: Scalars['ID']['output'];
  linearOrganisationName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserMsTeamsInstallationInfo = {
  __typename?: 'UserMSTeamsInstallationInfo';
  installationUrl?: Maybe<Scalars['String']['output']>;
};

export type UserMsTeamsIntegration = {
  __typename?: 'UserMSTeamsIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  msTeamsPreferredUsername?: Maybe<Scalars['String']['output']>;
  msTeamsTenantId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserSlackInstallationInfo = {
  __typename?: 'UserSlackInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type UserSlackIntegration = {
  __typename?: 'UserSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  slackTeamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export enum UserStatus {
  Break = 'BREAK',
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type UsersFilter = {
  /** @deprecated Use isAssignableToThread instead */
  isAssignableToCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  isAssignableToThread?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VerifyHelpCenterCustomDomainNameInput = {
  helpCenterId: Scalars['ID']['input'];
};

export type VerifyHelpCenterCustomDomainNameOutput = {
  __typename?: 'VerifyHelpCenterCustomDomainNameOutput';
  error?: Maybe<MutationError>;
  helpCenter?: Maybe<HelpCenter>;
};

export type VerifyWorkspaceEmailDnsSettingsOutput = {
  __typename?: 'VerifyWorkspaceEmailDnsSettingsOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type VerifyWorkspaceEmailForwardingSettingsInput = {
  isForwardingConfigured: Scalars['Boolean']['input'];
};

export type VerifyWorkspaceEmailForwardingSettingsOutput = {
  __typename?: 'VerifyWorkspaceEmailForwardingSettingsOutput';
  error?: Maybe<MutationError>;
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type WebhookTarget = {
  __typename?: 'WebhookTarget';
  createdAt: DateTime;
  createdBy: InternalActor;
  description: Scalars['String']['output'];
  eventSubscriptions: Array<WebhookTargetEventSubscription>;
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
};

export type WebhookTargetConnection = {
  __typename?: 'WebhookTargetConnection';
  edges: Array<WebhookTargetEdge>;
  pageInfo: PageInfo;
};

export type WebhookTargetEdge = {
  __typename?: 'WebhookTargetEdge';
  cursor: Scalars['String']['output'];
  node: WebhookTarget;
};

export type WebhookTargetEventSubscription = {
  __typename?: 'WebhookTargetEventSubscription';
  eventType: Scalars['String']['output'];
};

export type WebhookTargetEventSubscriptionInput = {
  eventType: Scalars['String']['input'];
};

export type WebhookVersion = {
  __typename?: 'WebhookVersion';
  isDeprecated: Scalars['Boolean']['output'];
  isLatest: Scalars['Boolean']['output'];
  version: Scalars['String']['output'];
};

export type WebhookVersionConnection = {
  __typename?: 'WebhookVersionConnection';
  edges: Array<WebhookVersionEdge>;
  pageInfo: PageInfo;
};

export type WebhookVersionEdge = {
  __typename?: 'WebhookVersionEdge';
  cursor: Scalars['String']['output'];
  node: WebhookVersion;
};

export enum WeekDay {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export type WorkflowRule = {
  __typename?: 'WorkflowRule';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** JSON-encoded payload of the rule definition. */
  payload: Scalars['String']['output'];
  publishedAt?: Maybe<DateTime>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkflowRuleConnection = {
  __typename?: 'WorkflowRuleConnection';
  edges: Array<WorkflowRuleEdge>;
  pageInfo: PageInfo;
};

export type WorkflowRuleEdge = {
  __typename?: 'WorkflowRuleEdge';
  cursor: Scalars['String']['output'];
  node: WorkflowRule;
};

export type WorkosConnectAuthMechanismInput = {
  apiHost: Scalars['String']['input'];
  appClientId: Scalars['String']['input'];
  appSecret: Scalars['String']['input'];
};

export type Workspace = {
  __typename?: 'Workspace';
  createdAt: DateTime;
  createdBy: InternalActor;
  /** @deprecated Use domainNames instead */
  domainName?: Maybe<Scalars['String']['output']>;
  domainNames: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDemoWorkspace: Scalars['Boolean']['output'];
  logo?: Maybe<WorkspaceFile>;
  name: Scalars['String']['output'];
  publicName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  workspaceChatSettings: WorkspaceChatSettings;
  workspaceEmailSettings: WorkspaceEmailSettings;
};

export type WorkspaceChatSettings = {
  __typename?: 'WorkspaceChatSettings';
  isEnabled: Scalars['Boolean']['output'];
};

export type WorkspaceConnection = {
  __typename?: 'WorkspaceConnection';
  edges: Array<WorkspaceEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceDiscordChannelInstallationInfo = {
  __typename?: 'WorkspaceDiscordChannelInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type WorkspaceDiscordChannelIntegration = {
  __typename?: 'WorkspaceDiscordChannelIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  discordGuildId: Scalars['String']['output'];
  discordGuildName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceDiscordChannelIntegrationConnection = {
  __typename?: 'WorkspaceDiscordChannelIntegrationConnection';
  edges: Array<WorkspaceDiscordChannelIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceDiscordChannelIntegrationEdge = {
  __typename?: 'WorkspaceDiscordChannelIntegrationEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceDiscordChannelIntegration;
};

export type WorkspaceDiscordIntegration = {
  __typename?: 'WorkspaceDiscordIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  webhookUrl: Scalars['String']['output'];
};

export type WorkspaceDiscordIntegrationConnection = {
  __typename?: 'WorkspaceDiscordIntegrationConnection';
  edges: Array<WorkspaceDiscordIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceDiscordIntegrationEdge = {
  __typename?: 'WorkspaceDiscordIntegrationEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceDiscordIntegration;
};

export type WorkspaceEdge = {
  __typename?: 'WorkspaceEdge';
  cursor: Scalars['String']['output'];
  node: Workspace;
};

export type WorkspaceEmailDomainSettings = {
  __typename?: 'WorkspaceEmailDomainSettings';
  /**
   * The list of alternate email addresses that can be used to send emails to and from the workspace.
   * Limited to 5.
   *
   * e.g. [info@plain.com, help@plain.com].
   */
  alternateSupportEmailAddresses: Array<Scalars['String']['output']>;
  dkimDnsRecord: DnsRecord;
  domainName: Scalars['String']['output'];
  inboundForwardingEmail: Scalars['String']['output'];
  isDomainConfigured: Scalars['Boolean']['output'];
  isForwardingConfigured: Scalars['Boolean']['output'];
  returnPathDnsRecord: DnsRecord;
  supportEmailAddress: Scalars['String']['output'];
};

export type WorkspaceEmailSettings = {
  __typename?: 'WorkspaceEmailSettings';
  bccEmail?: Maybe<Scalars['String']['output']>;
  isEnabled: Scalars['Boolean']['output'];
  workspaceEmailDomainSettings?: Maybe<WorkspaceEmailDomainSettings>;
};

export type WorkspaceFile = {
  __typename?: 'WorkspaceFile';
  createdAt: DateTime;
  createdBy: InternalActor;
  /** This URL will only be available after the file has been uploaded. */
  downloadUrl?: Maybe<WorkspaceFileDownloadUrl>;
  fileExtension?: Maybe<Scalars['String']['output']>;
  fileMimeType: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  fileSize: FileSize;
  id: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  visibility: WorkspaceFileVisibility;
};

export type WorkspaceFileDownloadUrl = {
  __typename?: 'WorkspaceFileDownloadUrl';
  downloadUrl: Scalars['String']['output'];
  /** The time when the download URL will expire. Only set when visibility of the workspace file is PRIVATE. */
  expiresAt?: Maybe<DateTime>;
};

export type WorkspaceFileInput = {
  workspaceFileId?: InputMaybe<Scalars['ID']['input']>;
};

export type WorkspaceFileUploadUrl = {
  __typename?: 'WorkspaceFileUploadUrl';
  expiresAt: DateTime;
  uploadFormData: Array<UploadFormData>;
  uploadFormUrl: Scalars['String']['output'];
  workspaceFile: WorkspaceFile;
};

export enum WorkspaceFileVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type WorkspaceHmac = {
  __typename?: 'WorkspaceHmac';
  createdAt: DateTime;
  createdBy: InternalActor;
  hmacSecret?: Maybe<Scalars['String']['output']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceInvite = {
  __typename?: 'WorkspaceInvite';
  /** When the invite was created. */
  createdAt: DateTime;
  /** Who sent this invite. */
  createdBy: InternalActor;
  /** The email that is being invited. */
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Whether the person has accepted the invite. */
  isAccepted: Scalars['Boolean']['output'];
  /** The role that the invite will assign on workspace joining. This will replace the roles field. */
  role?: Maybe<Role>;
  /** The roles that the invite will assign on workspace joining. */
  roles: Array<Role>;
  /** When the invite was updated. */
  updatedAt: DateTime;
  /** Who updated this invite. */
  updatedBy: InternalActor;
  /** Whether the user would be assigned a billing rota seat upon joining. */
  usingBillingRotaSeat: Scalars['Boolean']['output'];
  /** The workspace they are being invited to. */
  workspace: Workspace;
};

export type WorkspaceInviteConnection = {
  __typename?: 'WorkspaceInviteConnection';
  edges: Array<WorkspaceInviteEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceInviteEdge = {
  __typename?: 'WorkspaceInviteEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceInvite;
};

export type WorkspaceMsTeamsInstallationInfo = {
  __typename?: 'WorkspaceMSTeamsInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type WorkspaceMsTeamsIntegration = {
  __typename?: 'WorkspaceMSTeamsIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  msTeamsTenantId: Scalars['ID']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackChannelInstallationInfo = {
  __typename?: 'WorkspaceSlackChannelInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type WorkspaceSlackChannelIntegration = {
  __typename?: 'WorkspaceSlackChannelIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  slackTeamId: Scalars['String']['output'];
  slackTeamImageUrl68px?: Maybe<Scalars['String']['output']>;
  slackTeamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackChannelIntegrationConnection = {
  __typename?: 'WorkspaceSlackChannelIntegrationConnection';
  edges: Array<WorkspaceSlackChannelIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceSlackChannelIntegrationEdge = {
  __typename?: 'WorkspaceSlackChannelIntegrationEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceSlackChannelIntegration;
};

export type WorkspaceSlackInstallationInfo = {
  __typename?: 'WorkspaceSlackInstallationInfo';
  installationUrl: Scalars['String']['output'];
};

export type WorkspaceSlackIntegration = {
  __typename?: 'WorkspaceSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID']['output'];
  isReinstallRequired: Scalars['Boolean']['output'];
  slackChannelName: Scalars['String']['output'];
  slackTeamImageUrl68px?: Maybe<Scalars['String']['output']>;
  slackTeamName: Scalars['String']['output'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackIntegrationConnection = {
  __typename?: 'WorkspaceSlackIntegrationConnection';
  edges: Array<WorkspaceSlackIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceSlackIntegrationEdge = {
  __typename?: 'WorkspaceSlackIntegrationEdge';
  cursor: Scalars['String']['output'];
  node: WorkspaceSlackIntegration;
};

export type GetCustomersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCustomersQuery = { __typename?: 'Query', customers: { __typename?: 'CustomerConnection', totalCount: number, edges: Array<{ __typename?: 'CustomerEdge', cursor: string, node: { __typename?: 'Customer', id: string, fullName: string, shortName?: string | null, avatarUrl?: string | null, status?: CustomerStatus | null, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean }, company?: { __typename?: 'Company', id: string, name: string } | null, createdAt: (
          { __typename?: 'DateTime' }
          & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
        ), updatedAt: (
          { __typename?: 'DateTime' }
          & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
        ) } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type GetTenantsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTenantsQuery = { __typename?: 'Query', tenants: { __typename?: 'TenantConnection', edges: Array<{ __typename?: 'TenantEdge', cursor: string, node: { __typename?: 'Tenant', id: string, name: string, externalId: string, createdAt: (
          { __typename?: 'DateTime' }
          & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
        ), updatedAt: (
          { __typename?: 'DateTime' }
          & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
        ) } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type GetThreadDetailsQueryVariables = Exact<{
  threadId: Scalars['ID']['input'];
}>;


export type GetThreadDetailsQuery = { __typename?: 'Query', thread?: { __typename?: 'Thread', id: string, title: string, status: ThreadStatus, priority: number, statusChangedAt: (
      { __typename?: 'DateTime' }
      & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
    ), createdAt: (
      { __typename?: 'DateTime' }
      & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
    ), updatedAt: (
      { __typename?: 'DateTime' }
      & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
    ), customer: { __typename?: 'Customer', id: string, fullName: string, email: { __typename?: 'EmailAddress', email: string }, company?: { __typename?: 'Company', name: string } | null }, labels: Array<{ __typename?: 'Label', id: string, labelType: { __typename?: 'LabelType', name: string, color?: string | null, icon?: string | null } }> } | null };

export type GetThreadsQueryVariables = Exact<{
  filters?: InputMaybe<ThreadsFilter>;
  sortBy?: InputMaybe<ThreadsSort>;
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetThreadsQuery = { __typename?: 'Query', threads: { __typename?: 'ThreadConnection', totalCount: number, edges: Array<{ __typename?: 'ThreadEdge', cursor: string, node: { __typename?: 'Thread', id: string, title: string, status: ThreadStatus, priority: number, previewText?: string | null, statusChangedAt: (
          { __typename?: 'DateTime' }
          & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
        ), updatedAt: (
          { __typename?: 'DateTime' }
          & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
        ), createdAt: (
          { __typename?: 'DateTime' }
          & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
        ), customer: { __typename?: 'Customer', id: string, fullName: string, email: { __typename?: 'EmailAddress', email: string }, company?: { __typename?: 'Company', name: string } | null }, labels: Array<{ __typename?: 'Label', id: string, labelType: { __typename?: 'LabelType', name: string, color?: string | null, icon?: string | null } }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type GetTimelineEventsQueryVariables = Exact<{
  threadId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetTimelineEventsQuery = { __typename?: 'Query', thread?: { __typename?: 'Thread', id: string, timelineEntries: { __typename?: 'TimelineEntryConnection', edges: Array<{ __typename?: 'TimelineEntryEdge', cursor: string, node: { __typename?: 'TimelineEntry', id: string, customerId: string, threadId: string, llmText?: string | null, timestamp: (
            { __typename?: 'DateTime' }
            & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
          ), actor: { __typename: 'CustomerActor', customerId: string, customer: { __typename: 'Customer', id: string, fullName: string, email: { __typename?: 'EmailAddress', email: string } } } | { __typename: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string, machineUser: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description?: string | null } } | { __typename: 'SystemActor' } | { __typename: 'UserActor', userId: string, user: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, status: UserStatus, avatarUrl?: string | null } }, entry: { __typename: 'ChatEntry', chatId: string, chatText?: string | null, customerReadAt?: (
              { __typename?: 'DateTime' }
              & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
            ) | null, attachments: Array<{ __typename?: 'Attachment', id: string, fileName: string, fileMimeType: string, fileSize: { __typename?: 'FileSize', bytes: number } }> } | { __typename: 'CustomEntry', externalId?: string | null, title: string, type?: string | null, attachments: Array<{ __typename?: 'Attachment', id: string, fileName: string, fileMimeType: string, fileSize: { __typename?: 'FileSize', bytes: number } }> } | { __typename: 'CustomerEventEntry', timelineEventId: string, title: string, customerId: string, externalId?: string | null } | { __typename: 'DiscordMessageEntry' } | { __typename: 'EmailEntry', emailId: string, subject?: string | null, textContent?: string | null, hasMoreTextContent: boolean, fullTextContent?: string | null, markdownContent?: string | null, hasMoreMarkdownContent: boolean, fullMarkdownContent?: string | null, authenticity: EmailAuthenticity, sendStatus?: EmailSendStatus | null, isStartOfThread: boolean, sentAt?: (
              { __typename?: 'DateTime' }
              & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
            ) | null, receivedAt?: (
              { __typename?: 'DateTime' }
              & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
            ) | null, from: { __typename?: 'EmailParticipant', name?: string | null, email: string }, to: { __typename?: 'EmailParticipant', name?: string | null, email: string }, additionalRecipients: Array<{ __typename?: 'EmailParticipant', name?: string | null, email: string }>, hiddenRecipients: Array<{ __typename?: 'EmailParticipant', name?: string | null, email: string }>, attachments: Array<{ __typename?: 'Attachment', id: string, fileName: string, fileMimeType: string, fileSize: { __typename?: 'FileSize', bytes: number } }>, bounces: Array<{ __typename?: 'EmailBounce', isSendRetriable: boolean, bouncedAt: (
                { __typename?: 'DateTime' }
                & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
              ), recipient: { __typename?: 'EmailParticipant', name?: string | null, email: string } }> } | { __typename: 'HelpCenterAiConversationMessageEntry' } | { __typename: 'LinearIssueThreadLinkStateTransitionedEntry' } | { __typename: 'MSTeamsMessageEntry' } | { __typename: 'NoteEntry', noteId: string, text: string, markdown?: string | null, attachments: Array<{ __typename?: 'Attachment', id: string, fileName: string, fileMimeType: string, fileSize: { __typename?: 'FileSize', bytes: number } }> } | { __typename: 'ServiceLevelAgreementStatusTransitionedEntry' } | { __typename: 'SlackMessageEntry', slackMessageLink: string, slackWebMessageLink: string, text: string, customerId: string, relatedThread?: { __typename?: 'SlackMessageEntryRelatedThread', threadId: string } | null, attachments: Array<{ __typename?: 'Attachment', id: string, fileName: string, fileMimeType: string, fileSize: { __typename?: 'FileSize', bytes: number } }>, lastEditedOnSlackAt?: (
              { __typename?: 'DateTime' }
              & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
            ) | null, deletedOnSlackAt?: (
              { __typename?: 'DateTime' }
              & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
            ) | null, reactions: Array<{ __typename?: 'SlackReaction', name: string, imageUrl?: string | null, actors: Array<{ __typename: 'CustomerActor', customerId: string, customer: { __typename?: 'Customer', fullName: string } } | { __typename: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor' } | { __typename: 'SystemActor' } | { __typename: 'UserActor', userId: string, user: { __typename?: 'User', publicName: string } }> }> } | { __typename: 'SlackReplyEntry', slackMessageLink: string, slackWebMessageLink: string, customerId: string, text: string, attachments: Array<{ __typename?: 'Attachment', id: string, fileName: string, fileMimeType: string, fileSize: { __typename?: 'FileSize', bytes: number } }>, lastEditedOnSlackAt?: (
              { __typename?: 'DateTime' }
              & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
            ) | null, deletedOnSlackAt?: (
              { __typename?: 'DateTime' }
              & { ' $fragmentRefs'?: { 'DateTimeFragment': DateTimeFragment } }
            ) | null, reactions: Array<{ __typename?: 'SlackReaction', name: string, imageUrl?: string | null, actors: Array<{ __typename: 'CustomerActor', customerId: string, customer: { __typename?: 'Customer', fullName: string } } | { __typename: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor' } | { __typename: 'SystemActor' } | { __typename: 'UserActor', userId: string, user: { __typename?: 'User', publicName: string } }> }> } | { __typename: 'ThreadAdditionalAssigneesTransitionedEntry' } | { __typename: 'ThreadAssignmentTransitionedEntry' } | { __typename: 'ThreadDiscussionEntry' } | { __typename: 'ThreadDiscussionResolvedEntry' } | { __typename: 'ThreadEventEntry', timelineEventId: string, title: string, customerId: string, externalId?: string | null } | { __typename: 'ThreadLabelsChangedEntry' } | { __typename: 'ThreadLinkUpdatedEntry' } | { __typename: 'ThreadPriorityChangedEntry' } | { __typename: 'ThreadStatusTransitionedEntry' } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } } | null };

export type GetWorkspaceQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorkspaceQuery = { __typename?: 'Query', myWorkspace?: { __typename?: 'Workspace', id: string, name: string, publicName: string } | null };

export type DateTimeFragment = { __typename: 'DateTime', iso8601: string } & { ' $fragmentName'?: 'DateTimeFragment' };

export const DateTimeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<DateTimeFragment, unknown>;
export const GetCustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCustomers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<GetCustomersQuery, GetCustomersQueryVariables>;
export const GetTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<GetTenantsQuery, GetTenantsQueryVariables>;
export const GetThreadDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThreadDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<GetThreadDetailsQuery, GetThreadDetailsQueryVariables>;
export const GetThreadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThreads"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadsSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<GetThreadsQuery, GetThreadsQueryVariables>;
export const GetTimelineEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTimelineEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timelineEntries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"llmText"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}},{"kind":"Field","name":{"kind":"Name","value":"machineUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ChatEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"chatId"}},{"kind":"Field","alias":{"kind":"Name","value":"chatText"},"name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"customerReadAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bytes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileMimeType"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"emailId"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"textContent"}},{"kind":"Field","name":{"kind":"Name","value":"hasMoreTextContent"}},{"kind":"Field","name":{"kind":"Name","value":"fullTextContent"}},{"kind":"Field","name":{"kind":"Name","value":"markdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"hasMoreMarkdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"fullMarkdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"authenticity"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"receivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sendStatus"}},{"kind":"Field","name":{"kind":"Name","value":"isStartOfThread"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hiddenRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bytes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileMimeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bounces"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bouncedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"recipient"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isSendRetriable"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NoteEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteId"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bytes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileMimeType"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bytes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileMimeType"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SlackMessageEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slackMessageLink"}},{"kind":"Field","name":{"kind":"Name","value":"slackWebMessageLink"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedThread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threadId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bytes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileMimeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastEditedOnSlackAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedOnSlackAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"actors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SlackReplyEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slackMessageLink"}},{"kind":"Field","name":{"kind":"Name","value":"slackWebMessageLink"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bytes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileMimeType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastEditedOnSlackAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedOnSlackAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"actors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publicName"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullName"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadEventEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timelineEventId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEventEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timelineEventId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}}]} as unknown as DocumentNode<GetTimelineEventsQuery, GetTimelineEventsQueryVariables>;
export const GetWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}}]}}]}}]} as unknown as DocumentNode<GetWorkspaceQuery, GetWorkspaceQueryVariables>;