using Sitecore.Analytics;
using Sitecore.Diagnostics;
using Sitecore.Rules;
using Sitecore.Rules.Conditions;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SaudiAirportDemoWebApplication.Rules.Conditions
{
    public class ContactVisitCountCondition<T> : WhenCondition<T> where T : RuleContext
    {
        public int No { get; set; }
        //Sitecore.Analytics.Rules.Conditions.ContactVisitIndexCondition<T> where T
        protected override bool Execute(T ruleContext)
        {
            Assert.ArgumentNotNull(ruleContext, "ruleContext");
            Assert.IsNotNull(Tracker.Current, "Tracker.Current is not initialized");
            Assert.IsNotNull(Tracker.Current.Session, "Tracker.Current.Session is not initialized");
            Assert.IsNotNull(Tracker.Current.Session.Interaction, "Tracker.Current.Session.Interaction is not initialized");
            int contactVisitIndex = Tracker.Current.Session.Interaction.ContactVisitIndex;
          
            var visitCount = Tracker.Current.Contact.System.VisitCount;
           // Log.Info($"[ReloadTrack] Reload is done pagesVisited: {pagesVisited}", this);
            bool issecondtime= visitCount > No;
            Log.Info($"[ReloadTrack] Reload is done: {issecondtime}", this);
            return issecondtime;
            //return GetOperator() switch
            //{
            //    ConditionOperator.Equal => reloadCount == No,
            //    ConditionOperator.GreaterThanOrEqual => reloadCount >= No,
            //    ConditionOperator.GreaterThan => reloadCount > No,
            //    ConditionOperator.LessThanOrEqual => reloadCount <= No,
            //    ConditionOperator.LessThan => reloadCount < No,
            //    ConditionOperator.NotEqual => reloadCount != No,
            //    _ => false,
            //};
        }

        public override bool CanEvaluate(T ruleContext)
        {
            return Tracker.Current?.Session?.Interaction != null;
        }
    }
}